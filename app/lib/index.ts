import firebaseConfigAltDev from "./firebase/dev/firebaseAltId.json"
import firebaseConfigAltProd from "./firebase/production/firebaseAltId.json"

export const firebaseConfig = __DEV__ ? firebaseConfigAltDev : firebaseConfigAltProd
