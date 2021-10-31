# A repo to reproduce gRPC bug in serverless Nextjs

`yarn install`
`yarn run build`
`yarn run start`

`GET http://127.0.0.1:3000/api/hello`

Will trigger a 500 error, with this error in the console:

```
Error: ENOENT: no such file or directory, open '/Users/richard/Projects/test-grpc/.next/serverless/grpc/protos/autopilot.proto'
    at Object.openSync (node:fs:585:3)
    at Object.readFileSync (node:fs:453:35)
    at fetch (/Users/richard/Projects/test-grpc/.next/serverless/chunks/674.js:106984:34)
    at Root.load (/Users/richard/Projects/test-grpc/.next/serverless/chunks/674.js:107018:13)
    at Root.loadSync (/Users/richard/Projects/test-grpc/.next/serverless/chunks/674.js:107059:17)
    at Object.loadProtosWithOptionsSync (/Users/richard/Projects/test-grpc/.next/serverless/chunks/674.js:9922:29)
    at loadSync (/Users/richard/Projects/test-grpc/.next/serverless/chunks/674.js:9827:31)
    at module.exports (/Users/richard/Projects/test-grpc/.next/serverless/chunks/674.js:63352:42)
    at /Users/richard/Projects/test-grpc/.next/serverless/chunks/674.js:63429:24
    at Array.reduce (<anonymous>) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: '/Users/richard/Projects/test-grpc/.next/serverless/grpc/protos/autopilot.proto'
}
```

Running `yarn run dev` "works", but triggers a different error (can't connect the the server), but gRPC client can load the required \*.proto files.
