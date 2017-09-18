import React from 'react';
import ReactDom from 'react-dom';
import ToDoList from './todo';
import ChordProgressionList from './chordprogressions';
import SongBook from './songbook';
import LinksSection from './links';
import UnderlayList from './underlay';
import ChaseSongList from './chasesongs';

ReactDom.render(<ToDoList />,
  document.getElementById('todolist'));

ReactDom.render(<ChordProgressionList />,
  document.getElementById('chordprogressionlist'));

ReactDom.render(<SongBook />,
  document.getElementById('songbook'));

ReactDom.render(<LinksSection />,
  document.getElementById('linklist'));

ReactDom.render(<UnderlayList />,
  document.getElementById('underlaylist'));

ReactDom.render(<ChaseSongList />,
  document.getElementById('chasesonglist'));
