import "angular-local-storage";
import {Service, Inject} from "angular-decorators";

@Service("LocalStorageService")
@Inject("localStorageService")
export class LocalStorageService {

    constructor(localStorageService) {
        this.localStorage = localStorageService;
    }

    /* HELPERS */

    getKey(key) {
        if (this.localStorage.isSupported) {
            return this.localStorage.get(key);
        } else {
            return false;
        }
    }

    setKey(key, value) {
        if (this.localStorage.isSupported) {
            return this.localStorage.set(key, value)
        } else {
            return false;
        }
    }
}
