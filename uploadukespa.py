import boto3
import StringIO
import zipfile
import mimetypes


def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:351501176886:deployUkulele-spaTopic')
    location = {
        "bucketName": 'ukebuild.robielutsey.com',
        "objectKey": 'ukebuild.zip'
    }
    try:
        job = event.get("CodePipeline.job")
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]['s3Location']

        print "Building Uke site from" + str(location)
        s3 = boto3.resource('s3')
        portfolio_bucket = s3.Bucket('uke.robielutsey.com')
        build_bucket = s3.Bucket(location["bucketName"])

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "Job done."
        topic.publish(Subject='Uke site Updated', Message='Your Uke site has successfully been updated.')
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
        topic.publish(Subject='Uke site deploy failed', Message='Your uke site deployment has failed.')
        raise

    return 'Hello from Lambda'
