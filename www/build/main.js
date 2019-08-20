webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothDeviceConnectorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';



var BluetoothDeviceConnectorService = (function () {
    function BluetoothDeviceConnectorService(
        // private androidPermissions: AndroidPermissions,
        platform) {
        this.platform = platform;
        this.CARRIAGE_DATA = '{ZC1}';
        this.ANDROID_INTERFACE_ID = '00001101-0000-1000-8000-00805F9B34FB';
        this.Readers = new Set(['rs320', 'RS420', 'XRS2', 'RS420_07820']);
        this.Weighers = new Set(['EziWeigh', 'XR5000']);
    }
    /**
     * Initialise plugin
     */
    BluetoothDeviceConnectorService.prototype.initialise = function () {
        if (!this.bluetoothSerial) {
            this.bluetoothSerial = window.bluetoothClassicSerial;
        }
    };
    /**
     * Requests current weight from the weigher. The weight would be published to the behavior subject from the connectWeigher function
     */
    BluetoothDeviceConnectorService.prototype.readWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.writeToWeigher(this.CARRIAGE_DATA)];
                    case 1:
                        _a.sent(); // enable carriage \n
                        return [4 /*yield*/, this.writeToWeigher('{RW}')];
                    case 2:
                        _a.sent(); // Tru-Test - yes  gallagher?   this is a live weight
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Requests a stable weight from the weigher. The weight would be published to the behavior subject from the connectWeigher function
     */
    BluetoothDeviceConnectorService.prototype.readStableWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.writeToWeigher(this.CARRIAGE_DATA)];
                    case 1:
                        _a.sent(); // enable carriage \n
                        return [4 /*yield*/, this.writeToWeigher('{RO}')];
                    case 2:
                        _a.sent(); // Tru-Test - yes  gallagher?   this is a live weight
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Connect to a bluetooth reader
     *
     * return true if connection was successful
     */
    BluetoothDeviceConnectorService.prototype.connectReader = function () {
        var _this = this;
        var reader = this.devices.find(function (d) { return _this.Readers.has(d.name); });
        console.log('connectReader', reader, this.devices);
        if (reader) {
            return this.connect(reader);
        }
        else {
            return Promise.resolve('');
        }
    };
    /**
     * Connect to a bluetooth weigher
     *
     * return the name weigher if connection was successful
     */
    BluetoothDeviceConnectorService.prototype.connectWeigher = function () {
        var _this = this;
        var weigher = this.devices.find(function (d) { return _this.Weighers.has(d.name); });
        console.log('connectWeigher', weigher);
        if (weigher) {
            this.weigherConfig = this.buildPlatformSpecificConfig(weigher);
            return this.connect(weigher);
        }
        else {
            return Promise.resolve('');
        }
    };
    /**
     * Subscribe to bluetooth reader values
     *
     * return a behavior subject with the values from the reader
     */
    BluetoothDeviceConnectorService.prototype.subscribeToReader = function () {
        var _this = this;
        var reader = this.devices.find(function (d) { return _this.Readers.has(d.name); });
        return this.subscribeToDevice(reader);
    };
    /**
     * Subscribe to bluetooth weigher values
     *
     * return a behavior subject with the values from the weigher
     */
    BluetoothDeviceConnectorService.prototype.subscribeToWeigher = function () {
        var _this = this;
        var weigher = this.devices.find(function (d) { return _this.Weighers.has(d.name); });
        return this.subscribeToDevice(weigher);
    };
    BluetoothDeviceConnectorService.prototype.connect = function (config) {
        var _this = this;
        var platformSpecificConfig = this.buildPlatformSpecificConfig(config);
        return new Promise(function (resolve, reject) {
            _this.bluetoothSerial.connect(platformSpecificConfig.deviceId, platformSpecificConfig.interfaceIdArray, function () {
                console.log('connected');
                resolve(config.name);
            }, function (error) {
                console.log('error', error);
                resolve(null);
            });
        });
    };
    /**
     * Function to detect whether a reader is connected or not
     * Returns a boolean
     */
    BluetoothDeviceConnectorService.prototype.checkIfReaderConnected = function () {
        var _this = this;
        var reader = this.devices.find(function (d) { return _this.Readers.has(d.name); });
        if (!reader) {
            return Promise.resolve(false);
        }
        var platformSpecificConfig = this.buildPlatformSpecificConfig(reader);
        return new Promise(function (resolve, reject) {
            _this.bluetoothSerial.isConnected(platformSpecificConfig.deviceId, platformSpecificConfig.interfaceIdArray, function () {
                resolve(true);
            }, function (error) {
                console.log('error', error);
                resolve(false);
            });
        });
    };
    /**
     * Function to detect whether a reader is connected or not
     * Returns a boolean
     */
    BluetoothDeviceConnectorService.prototype.checkIfWeigherConnected = function () {
        var _this = this;
        var weigher = this.devices.find(function (d) { return _this.Weighers.has(d.name); });
        if (!weigher) {
            return Promise.resolve(false);
        }
        var platformSpecificConfig = this.buildPlatformSpecificConfig(weigher);
        return new Promise(function (resolve, reject) {
            _this.bluetoothSerial.isConnected(platformSpecificConfig.deviceId, platformSpecificConfig.interfaceIdArray, function () {
                resolve(true);
            }, function (error) {
                console.log('error', error);
                resolve(false);
            });
        });
    };
    // /**
    //  * Check if app has bluetooth permission
    //  * If not, then request user for permission
    //  */
    // public async checkAndRequestBluetoothPermission(): Promise<boolean> {
    //   try {
    //     const result = await this.androidPermissions.checkPermission(
    //       this.androidPermissions.PERMISSION.BLUETOOTH
    //     );
    //     console.log('Has permission?', result.hasPermission);
    //   } catch (err) {
    //     await this.androidPermissions.requestPermissions([
    //       this.androidPermissions.PERMISSION.BLUETOOTH,
    //       this.androidPermissions.PERMISSION.BLUETOOTH_ADMIN,
    //       this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
    //     ]);
    //     const result = await this.androidPermissions.checkPermission(
    //       this.androidPermissions.PERMISSION.BLUETOOTH
    //     );
    //     return result.hasPermission;
    //   }
    // }
    /**
     * Return whether bluetooth is switched on the device
     */
    BluetoothDeviceConnectorService.prototype.checkBluetoothEnabled = function () {
        var _this = this;
        return new Promise(function (res) {
            _this.bluetoothSerial.isEnabled(function () {
                res(true);
            }, function () {
                res(false);
            });
        });
    };
    BluetoothDeviceConnectorService.prototype.refreshPairedDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('listing bluetooth devices');
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.bluetoothSerial.list(function (pairedDevices) {
                                    for (var _i = 0, pairedDevices_1 = pairedDevices; _i < pairedDevices_1.length; _i++) {
                                        var device = pairedDevices_1[_i];
                                        console.log('device', device);
                                    }
                                    resolve(pairedDevices);
                                }, function (error) {
                                    reject(error);
                                });
                            })];
                    case 1:
                        _a.devices = _b.sent();
                        console.log('number of devices discovered', this.devices.length);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Find unpaired devices and adds them to the devices list
     *
     * Android
     *
     * The discovery process takes a while to happen.
     * You may want to show a progress indicator while waiting for the discover process to finish.
     * Once finished, would add the list unpaired devices to the devices list
     *
     * iOS
     *
     * Will launch a native iOS window showing all devices which match the protocol string defined in the application's cordova config.xml file.
     * Choosing a device from the list will initiate pairing. Once paired the device is available for connection.
     * This newly paired device will be added to the devices list
     */
    BluetoothDeviceConnectorService.prototype.discoverUnpairedDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var unpairedDevices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.discoverUnpairedDevicesForAndroid()];
                    case 1:
                        unpairedDevices = _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.discoverUnpairedDevicesForIos()];
                    case 3:
                        unpairedDevices = _a.sent();
                        return [3 /*break*/, 5];
                    case 4: throw new Error('Only supported on android and iOS');
                    case 5:
                        console.log('unpairedDevices', unpairedDevices);
                        this.devices = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["uniqBy"])(this.devices.concat(unpairedDevices), 'id');
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothDeviceConnectorService.prototype.disconnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.bluetoothSerial.disconnect(resolve, reject);
        });
    };
    BluetoothDeviceConnectorService.prototype.discoverUnpairedDevicesForAndroid = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.bluetoothSerial.discoverUnpaired(function (pairedDevices) {
                for (var _i = 0, pairedDevices_2 = pairedDevices; _i < pairedDevices_2.length; _i++) {
                    var device = pairedDevices_2[_i];
                    console.log('discoverUnpaired device', device);
                }
                resolve(pairedDevices);
            }, function (error) {
                console.log('error listing bluetooth devices', error);
                reject(error);
            });
        });
    };
    BluetoothDeviceConnectorService.prototype.discoverUnpairedDevicesForIos = function () {
        var _this = this;
        this.bluetoothSerial.discoverUnpaired();
        return new Promise(function (resolve) {
            _this.bluetoothSerial.setDeviceDiscoveredListener(function (device) {
                console.log('received');
                resolve([device]);
            });
        });
    };
    // https://github.com/soltius/BluetoothClassicSerial#connect
    BluetoothDeviceConnectorService.prototype.buildPlatformSpecificConfig = function (config) {
        if (this.platform.is('android')) {
            return {
                deviceId: config.address,
                interfaceIdArray: [this.ANDROID_INTERFACE_ID]
            };
        }
        else if (this.platform.is('ios')) {
            return {
                deviceId: config.id,
                interfaceIdArray: config.protocols.filter(function (p) { return p !== ''; })
            };
        }
        else {
            alert('not supported');
            return;
        }
    };
    /* Subscribe to the device to receive data */
    BluetoothDeviceConnectorService.prototype.subscribeToDevice = function (config) {
        var platformSpecificConfig = this.buildPlatformSpecificConfig(config);
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        var osSpecificInterfaceId;
        if (this.platform.is('android')) {
            // osSpecificInterfaceId = this.ANDROID_INTERFACE_ID;
            osSpecificInterfaceId = platformSpecificConfig.deviceId;
        }
        else if (this.platform.is('ios')) {
            osSpecificInterfaceId = platformSpecificConfig.interfaceIdArray[0];
        }
        else {
            alert('not supported');
            return;
        }
        // Subscribe to data receiving as soon as the delimiter is read
        this.bluetoothSerial.subscribe(osSpecificInterfaceId, '\r', function (data) {
            console.log('data', data);
            subject.next(data);
        }, function (error) {
            console.error("Error during receiving data from " + config.name, error);
        });
        return subject;
    };
    BluetoothDeviceConnectorService.prototype.writeToWeigher = function (data) {
        var _this = this;
        var osSpecificInterfaceId;
        if (this.platform.is('android')) {
            osSpecificInterfaceId = this.weigherConfig.deviceId;
        }
        else if (this.platform.is('ios')) {
            osSpecificInterfaceId = this.weigherConfig.interfaceIdArray[0];
        }
        else {
            alert('not supported');
            return;
        }
        return new Promise(function (resolve, reject) {
            _this.bluetoothSerial.write(osSpecificInterfaceId, data, function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    BluetoothDeviceConnectorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], BluetoothDeviceConnectorService);
    return BluetoothDeviceConnectorService;
}());

//# sourceMappingURL=bluetooth-device-connector.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bluetooth_device_connector_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// import { BluetoothLE } from '@ionic-native/bluetooth-le';

var HomePage = (function () {
    function HomePage(loadCtrl, alertCtrl, platform, toastCtrl, bluetoothDeviceConnector, barcodeScanner, 
        // public bluetoothLe: BluetoothLE,
        ble) {
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.bluetoothDeviceConnector = bluetoothDeviceConnector;
        this.barcodeScanner = barcodeScanner;
        this.ble = ble;
        this.message = '';
    }
    HomePage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // public async scanQR() {
    //   const scannerStatus: barcodeScannerStatus = await this.barcodeScanner.prepare();
    //   if (scannerStatus.authorized) {
    //     // camera permission was granted
    //     // start scanning
    //     let scanSub = this.barcodeScanner.scan().subscribe((text: string) => {
    //       console.log('Scanned something', text);
    //       this.barcodeScanner.hide(); // hide camera preview
    //       scanSub.unsubscribe(); // stop scanning
    //     });
    //   } else if (scannerStatus.denied) {
    //     // camera permission was permanently denied
    //     // you must use barcodeScanner.openSettings() method to guide the user to the settings page
    //     // then they can grant the permission from there
    //   } else {
    //     // permission was denied, but not permanently. You can ask for permission again at a later time.
    //   }
    // }
    // public async connectReader() {
    //   try {
    //     // const status = await this.barcodeScanner.prepare();
    //     // console.log('status', status);
    //     // this.bluetoothDeviceConnector.initialise();
    //     const ble = await this.bluetoothLe.initialize();
    //     console.log('ble', ble.status); // logs 'enabled'
    //     this.bluetoothLe
    //       .startScan(
    //         // data => {
    //         //   console.log('data', data);
    //         // }
    //         // err => {
    //         //   console.log('err', err);
    //         // }
    //         {}
    //       )
    //       .subscribe((data: any) => {
    //         console.log(
    //           'name',
    //           data.name,
    //           'manufacturer',
    //           data.advertisement && data.advertisement.manufacturerData,
    //           'serviceUuids',
    //           data.advertisement && data.advertisement.serviceUuids
    //         );
    //         if (data.name && data.name.indexOf('SDL') !== -1) {
    //           console.log('found it', data);
    //           this.bluetoothLe.connect({ address: data.address }).subscribe(async (data2: any) => {
    //             console.log('data2', data2);
    //             this.bluetoothLe.stopScan();
    //             const services = await this.bluetoothLe.services({ address: data.address });
    //             console.log('services', services);
    //             const discover = await this.bluetoothLe.discover({ address: data.address });
    //             console.log('discover', discover);
    //             console.log('characteristics with', {
    //               characteristics: [],
    //               address: data.address,
    //               service: services.services[0]
    //             });
    //             let characteristics;
    //             try {
    //               characteristics = await this.bluetoothLe.characteristics({
    //                 characteristics: [],
    //                 address: data.address,
    //                 service: services[0]
    //               });
    //             } catch (err) {
    //               console.log('err', err);
    //               console.log('characteristics with', {
    //                 characteristics: [],
    //                 address: data.address,
    //                 service: services.services[1]
    //               });
    //               try {
    //                 characteristics = await this.bluetoothLe.characteristics({
    //                   characteristics: [],
    //                   address: data.address,
    //                   service: services[1]
    //                 });
    //               } catch (err) {
    //                 console.log('err', err);
    //                 console.log('characteristics with', {
    //                   characteristics: [],
    //                   address: data.address,
    //                   service: services.services[2]
    //                 });
    //                 characteristics = await this.bluetoothLe.characteristics({
    //                   characteristics: [],
    //                   address: data.address,
    //                   service: services[2]
    //                 });
    //               }
    //             }
    //             console.log('characteristics', characteristics);
    //             console.log('descriptors with', {
    //               characteristic: characteristics[0],
    //               address: data.address,
    //               service: services[0]
    //             });
    //             const descriptors = await this.bluetoothLe.descriptors({
    //               characteristic: characteristics[0],
    //               address: data.address,
    //               service: services[0]
    //             });
    //             console.log('descriptors', descriptors);
    //             try {
    //               console.log('subscribing with', {
    //                 address: data.address,
    //                 service: services[0],
    //                 characteristic: characteristics[0]
    //               });
    //               this.bluetoothLe
    //                 .subscribe({
    //                   address: data.address,
    //                   service: services[0],
    //                   characteristic: characteristics[0]
    //                 })
    //                 .catch(
    //                   (err1, caught1: any): any => {
    //                     console.log('read error 1', err1);
    //                     console.log('caught1', caught1);
    //                   }
    //                 )
    //                 .subscribe(data3 => {
    //                   console.log('data3', data3);
    //                 });
    //             } catch (err) {
    //               console.log('read error', err);
    //             }
    //           });
    //         }
    //       });
    //   } catch (err) {
    //     console.log('err', err);
    //   }
    // await this.bluetoothDeviceConnector.refreshPairedDevices();
    // this.reader = await this.bluetoothDeviceConnector.connectReader();
    // if (this.reader) {
    //   this.bluetoothDeviceConnector.subscribeToReader().subscribe(value => {
    //     console.log('reader value', value);
    //     this.showToast(`reader value ${value}`);
    //   });
    // }
    // }
    HomePage.prototype.connectReader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    // const status = await this.barcodeScanner.prepare();
                    // console.log('status', status);
                    // this.bluetoothDeviceConnector.initialise();
                    // const ble = await this.ble.initialize();
                    // console.log('ble', ble.status); // logs 'enabled'
                    console.log('start scanning');
                    this.ble
                        .startScan(
                    // data => {
                    //   console.log('data', data);
                    // }
                    // err => {
                    //   console.log('err', err);
                    // }
                    [])
                        .subscribe(function (device) {
                        console.log('data', device);
                        console.log('data', device.name);
                        if (device.name && device.name.indexOf('SDL') !== -1) {
                            //   console.log('found it', data);
                            _this.ble.connect(device.id).subscribe(function (data2) { return __awaiter(_this, void 0, void 0, function () {
                                var err_1, err_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('data2', data2);
                                            this.ble.stopScan();
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 6, , 7]);
                                            console.log(data2.id, data2.services[0], data2.characteristics[0].characteristic);
                                            this.ble
                                                .startNotification(data2.id, 
                                            // data2.services[0],
                                            '2456E1B9-26E2-8F83-E744-F34F01E9D701', 
                                            // data2.characteristics[0].characteristic
                                            '2456E1B9-26E2-8F83-E744-F34F01E9D704')
                                                .catch(function (err1, caught1) {
                                                console.log('read error 1', err1);
                                                console.log('caught1', caught1);
                                            })
                                                .subscribe(function (data3) {
                                                console.log('data1', data3);
                                                console.log('data3', String.fromCharCode.apply(null, new Uint8Array(data3)));
                                            });
                                            this.ble
                                                .startNotification(data2.id, 
                                            // data2.services[0],
                                            '2456E1B9-26E2-8F83-E744-F34F01E9D701', 
                                            // data2.characteristics[0].characteristic
                                            '2456E1B9-26E2-8F83-E744-F34F01E9D703')
                                                .catch(function (err1, caught1) {
                                                console.log('read error 1', err1);
                                                console.log('caught1', caught1);
                                            })
                                                .subscribe(function (data3) {
                                                console.log('data2', data3);
                                                console.log('data2', String.fromCharCode.apply(null, new Uint8Array(data3)));
                                            });
                                            _a.label = 2;
                                        case 2:
                                            _a.trys.push([2, 4, , 5]);
                                            return [4 /*yield*/, this.ble.writeWithoutResponse(data2.id, 
                                                // data2.services[0],
                                                '2456E1B9-26E2-8F83-E744-F34F01E9D701', 
                                                // data2.characteristics[0].characteristic
                                                '2456E1B9-26E2-8F83-E744-F34F01E9D704', this.str2ab('\r'))];
                                        case 3:
                                            _a.sent();
                                            return [3 /*break*/, 5];
                                        case 4:
                                            err_1 = _a.sent();
                                            console.log('err', err_1);
                                            return [3 /*break*/, 5];
                                        case 5: return [3 /*break*/, 7];
                                        case 6:
                                            err_2 = _a.sent();
                                            console.log('error', err_2);
                                            return [3 /*break*/, 7];
                                        case 7: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                    });
                }
                catch (err) {
                    console.log('err', err);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.str2ab = function (str) {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    };
    HomePage.prototype.read1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ble.read('AE85AF7A-AE8A-E26A-3C03-6CB2C18B26BD', '180A', '2A29')];
                    case 1:
                        data3 = _a.sent();
                        console.log('data3', data3);
                        console.log('data3', String.fromCharCode.apply(null, new Uint8Array(data3)));
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.read2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ble.read('AE85AF7A-AE8A-E26A-3C03-6CB2C18B26BD', '180A', '2A24')];
                    case 1:
                        data3 = _a.sent();
                        console.log('data4', data3);
                        console.log('data4', String.fromCharCode.apply(null, new Uint8Array(data3)));
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.read3 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ble.read('AE85AF7A-AE8A-E26A-3C03-6CB2C18B26BD', '180A', '2A26')];
                    case 1:
                        data3 = _a.sent();
                        console.log('data5', data3);
                        console.log('data5', String.fromCharCode.apply(null, new Uint8Array(data3)));
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.read4 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ble.read('AE85AF7A-AE8A-E26A-3C03-6CB2C18B26BD', '180A', '2A28')];
                    case 1:
                        data3 = _a.sent();
                        console.log('data6', data3);
                        console.log('data6', String.fromCharCode.apply(null, new Uint8Array(data3)));
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.read5 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ble.read('AE85AF7A-AE8A-E26A-3C03-6CB2C18B26BD', '2456E1B9-26E2-8F83-E744-F34F01E9D701', '2456E1B9-26E2-8F83-E744-F34F01E9D704')];
                    case 1:
                        data7 = _a.sent();
                        console.log('data7', data7);
                        console.log('data7', String.fromCharCode.apply(null, new Uint8Array(data7)));
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.read6 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ble.read('AE85AF7A-AE8A-E26A-3C03-6CB2C18B26BD', '2456E1B9-26E2-8F83-E744-F34F01E9D701', '2456E1B9-26E2-8F83-E744-F34F01E9D703')];
                    case 1:
                        data8 = _a.sent();
                        console.log('data8', data8);
                        console.log('data8', String.fromCharCode.apply(null, new Uint8Array(data8)));
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.startScan = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var enabled, connectionResultReader, connectionResultWeigher, _a, err_3, _b, err_4, _c, _d, err_5;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 23, , 24]);
                        return [4 /*yield*/, this.bluetoothDeviceConnector.checkBluetoothEnabled()];
                    case 1:
                        enabled = _e.sent();
                        if (!enabled) {
                            this.showError('Please enable bluetooth');
                            return [2 /*return*/];
                        }
                        // const hasPermission = await this.bluetoothDeviceConnector.checkAndRequestBluetoothPermission();
                        // if (!hasPermission) {
                        //   this.showError('Needs bluetooth permission to connect with readers');
                        // }
                        return [4 /*yield*/, this.bluetoothDeviceConnector.disconnect()];
                    case 2:
                        // const hasPermission = await this.bluetoothDeviceConnector.checkAndRequestBluetoothPermission();
                        // if (!hasPermission) {
                        //   this.showError('Needs bluetooth permission to connect with readers');
                        // }
                        _e.sent();
                        return [4 /*yield*/, this.bluetoothDeviceConnector.refreshPairedDevices()];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, this.bluetoothDeviceConnector.checkIfReaderConnected()];
                    case 4:
                        connectionResultReader = _e.sent();
                        console.log('isconnected Reader', connectionResultReader);
                        return [4 /*yield*/, this.bluetoothDeviceConnector.checkIfWeigherConnected()];
                    case 5:
                        connectionResultWeigher = _e.sent();
                        console.log('isconnected Weigher', connectionResultWeigher);
                        _e.label = 6;
                    case 6:
                        _e.trys.push([6, 8, , 10]);
                        _a = this;
                        return [4 /*yield*/, this.bluetoothDeviceConnector.connectReader()];
                    case 7:
                        _a.reader = _e.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        err_3 = _e.sent();
                        console.log('disconnecting');
                        return [4 /*yield*/, this.bluetoothDeviceConnector.disconnect()];
                    case 9:
                        _e.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        _e.trys.push([10, 12, , 14]);
                        _b = this;
                        return [4 /*yield*/, this.bluetoothDeviceConnector.connectWeigher()];
                    case 11:
                        _b.weigher = _e.sent();
                        return [3 /*break*/, 14];
                    case 12:
                        err_4 = _e.sent();
                        console.log('disconnecting');
                        return [4 /*yield*/, this.bluetoothDeviceConnector.disconnect()];
                    case 13:
                        _e.sent();
                        return [3 /*break*/, 14];
                    case 14:
                        console.log('reader', this.reader);
                        console.log('weigher', this.weigher);
                        if (!(!this.reader || !this.weigher)) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.bluetoothDeviceConnector.discoverUnpairedDevices()];
                    case 15:
                        _e.sent();
                        _e.label = 16;
                    case 16:
                        console.log('discover ended');
                        if (!(!this.reader || !this.weigher)) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.bluetoothDeviceConnector.discoverUnpairedDevices()];
                    case 17:
                        _e.sent();
                        _e.label = 18;
                    case 18:
                        if (!!this.reader) return [3 /*break*/, 20];
                        _c = this;
                        return [4 /*yield*/, this.bluetoothDeviceConnector.connectReader()];
                    case 19:
                        _c.reader = _e.sent();
                        _e.label = 20;
                    case 20:
                        console.log('reader 2', this.reader);
                        if (!!this.weigher) return [3 /*break*/, 22];
                        _d = this;
                        return [4 /*yield*/, this.bluetoothDeviceConnector.connectWeigher()];
                    case 21:
                        _d.weigher = _e.sent();
                        _e.label = 22;
                    case 22:
                        console.log('weigher 2', this.weigher);
                        if (this.reader) {
                            this.bluetoothDeviceConnector
                                .subscribeToReader()
                                .filter(function (v) { return Boolean(v); })
                                .subscribe(function (value) {
                                console.log('reader value', value);
                                _this.showToast("reader value " + value);
                                _this.bluetoothDeviceConnector.readWeight();
                            });
                        }
                        if (this.weigher) {
                            this.bluetoothDeviceConnector
                                .subscribeToWeigher()
                                .subscribe(function (value) {
                                console.log('weigher value', value);
                                _this.showToast("weigher value " + value);
                                if (!value) {
                                    return;
                                }
                                if (value) {
                                    // remove carriage return
                                    value = value.replace(String.fromCharCode(13), '');
                                }
                                console.log('weigher value 2', value);
                                for (var i = 0; i < value.length; i++) {
                                    console.log(value.charCodeAt(i));
                                }
                                // if a null, unstable value or 0 value read, read again till we have a real value
                                if (value.indexOf('U') > 0 || value === '[0.0]') {
                                    _this.bluetoothDeviceConnector.readWeight();
                                    return;
                                }
                                _this.message = value;
                            });
                        }
                        return [3 /*break*/, 24];
                    case 23:
                        err_5 = _e.sent();
                        this.showError(err_5.message);
                        return [3 /*break*/, 24];
                    case 24: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.connectUnpairedDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bluetoothDeviceConnector.discoverUnpairedDevices()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.requestWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.requestStableWeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bluetoothDeviceConnector.readStableWeight()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showError = function (error) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: error,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.showToast = function (msj) {
        var toast = this.toastCtrl.create({
            message: msj,
            duration: 1000
        });
        toast.present();
    };
    HomePage.prototype.subscribeToWeigher = function () {
        var _this = this;
        this.bluetoothDeviceConnector.subscribeToWeigher().subscribe(function (value) {
            console.log('weigher value', value);
            _this.showToast("weigher value " + value);
        });
    };
    HomePage.prototype.scanQR = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scanData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('scanning 2');
                        console.log('this.barcodeScanner', this.barcodeScanner);
                        console.log('this.barcodeScanner', Object.keys(this.barcodeScanner));
                        return [4 /*yield*/, this.barcodeScanner.scan()];
                    case 1:
                        scanData = _a.sent();
                        console.log('scanData', scanData);
                        this.data = scanData.text;
                        // await this.barcodeScanner.show();
                        // window.document.querySelector('ion-app').classList.add('transparent-body');
                        console.log('camera opened');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kogulanbaskaran/development/BluetoothSerialMulti/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      AgriWebb Bluetooth App Test\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="back" padding>\n  <!-- <button ion-button full class="submit-button" (click)="refreshPairedDevices()">\n    <ion-icon name="refresh"></ion-icon>&nbsp;Refresh Bluetooth Devices\n  </button> -->\n  <ion-row>\n    <ion-col>\n      <h2>\n        Available Devices\n        <div *ngIf="readerConnected">Connected to {{ reader }} reader</div>\n        <div *ngIf="weigherConnected">Connected to {{ weigher }} weigher</div>\n        <button class="aw-btn" (click)="startScan()">\n          Search for devices\n        </button>\n      </h2>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row>\n    <ion-col>\n      <ion-list radio-group [(ngModel)]="pairedDeviceId">\n        <ion-item *ngFor="let i of pairedDevices; let j = index">\n          <ion-label>{{ i.name }}</ion-label>\n          <ion-radio value="{{ j }}"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <button ion-button outline block color="dark" (click)="connectDevice()">\n    Connect to Tag Reader\n  </button>\n  <button ion-button outline block color="dark" (click)="connectDevice(true)">\n    Connect to Weigher\n  </button> -->\n\n  <button ion-button outline block color="dark" (click)="connectReader()">Connect Reader</button>\n  <button ion-button outline block color="dark" (click)="read1()">Request Weight</button>\n  <button ion-button outline block color="dark" (click)="read2()">\n    Request Stable Weight\n  </button>\n  <button ion-button outline block color="dark" (click)="read3()">\n    Request Stable Weight\n  </button>\n  <button ion-button outline block color="dark" (click)="read4()">\n    Request Stable Weight\n  </button>\n  <button ion-button outline block color="dark" (click)="read5()">\n    Request Stable Weight\n  </button>\n  <button ion-button outline block color="dark" (click)="read6()">\n    Request Stable Weight\n  </button>\n  <button ion-button outline block color="dark" (click)="scanQR()">Scan QR</button>\n  <ion-item>\n    <ion-label stacked>Message</ion-label>\n    <ion-textarea [(ngModel)]="message"></ion-textarea>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/kogulanbaskaran/development/BluetoothSerialMulti/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__bluetooth_device_connector_service__["a" /* BluetoothDeviceConnectorService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__["a" /* BLE */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    // Now safe to use device APIs
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_bluetooth_device_connector_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_ble__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_bluetooth_device_connector_service__["a" /* BluetoothDeviceConnectorService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                // BluetoothLE,
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_ble__["a" /* BLE */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kogulanbaskaran/development/BluetoothSerialMulti/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kogulanbaskaran/development/BluetoothSerialMulti/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map