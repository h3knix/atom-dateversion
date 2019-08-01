'use babel';

import { CompositeDisposable } from 'atom';
const moment = require('moment');

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'dateversion:insertupdate': () => this.insertupdate()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {};
  },

  insertupdate() {
    let editor = atom.workspace.getActiveTextEditor();
    let now = moment();
    let date_part = now;
    let minor_part = 1;

    let current_selection = editor.getLastSelection().getText();
    if ( current_selection && current_selection.length == 10 ) {
      date_part = moment(current_selection.substring(0,8),'YYYYMMDD',true);;
      minor_part = parseInt(current_selection.substring(8));
      if ( ! date_part || ! date_part.isValid() || ! date_part.isSame(now,'day') ) {
        date_part = now;
        minor_part = 0;
      }
      if ( isNaN(minor_part) || minor_part >= 99 || minor_part < 0 ) minor_part = 0;
      minor_part++;
    }

    minor_part = ''+ minor_part;//coerce to string
    editor.insertText(date_part.format('YYYYMMDD') + minor_part.padStart(2,'0'));
  }

};
