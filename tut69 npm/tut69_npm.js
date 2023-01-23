// cd .. to move a dir back
// npm --version prints version
// npm i or npm install to get modules or dependencies
// npm i <package-name>
// npm install <package-name>
// npm uninstall <package-name>

// install specific version
// npm i <package-name>@<version>
/* eg: npm i slugify@1.6.4 (here 1 = major vesion,6 = minor version, 4=patch or bug fixing)
1.0.0 => software launced
1.0.1 => fixed bug
1.1.0 => add some minor function
2.0.0 => some functions removed or deprecated
*/
// dev dependencies => packages or dependencies required at development time
// npm install <package-name> --save-dev makes dev dependecy

// Install package globally
// npm install <package-name> --global

// ^ or ~ in dependencies in package.json file
// ^ => want exact version
// ~ => want new patch
// > => want latest version or latest major version

// npm view <package-name> version => to get version of package

console.log("This is tutorial 69.0.0 on npm");