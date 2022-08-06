import { firebaseConfig } from "./config";
import {
    getDatabase,
    update,
    set,
    ref,
    push,
    remove
} from "firebase/database";
import { initializeApp } from "@firebase/app";

let app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export function AddTxItem(_title, _decs, _value, _time, _type) {

  push(ref(database, 'transactions/'), {
      title: _title,
      desc: _decs,
      value: _value,
      time: _time,
      type: _type
  });
}

export function UpdateTxItem(TxId, _title, _decs, _value, _time, _type) {
  update(ref(database, 'transactions/' + TxId), {
      title: _title,
      desc: _decs,
      value: _value,
      time: _time,
      type: _type
  });
}
export function DeleteTxItem(TxId) {
  remove(ref(database, 'transactions/' + TxId));
}

