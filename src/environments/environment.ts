// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
   firebase: {
	apiKey: "AIzaSyDikY5z_u1d2i2MIR_8r7KioFJvkvu4oqg",
    authDomain: "inf133-a8c9f.firebaseapp.com",
    databaseURL: "https://inf133-a8c9f.firebaseio.com",
    projectId: "inf133-a8c9f",
    storageBucket: "inf133-a8c9f.appspot.com",
    messagingSenderId: "388808427008"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
