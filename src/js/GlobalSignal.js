
import { signal } from "@preact/signals-react";

import LocalStorage from "./LocalStorage.js";

const storage = new LocalStorage();


const GlobalSignalReveal = signal(storage.getReveal() ) ;
const GlobalSignalColor = signal(storage.getColor() ) ;

export { GlobalSignalReveal, GlobalSignalColor }