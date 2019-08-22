# Phoenix - map

## Development

```
yarn
yarn dev
```

## Deployment

We're using `now` deployment, so simply push your branch to a GitHub PR and check the `now` deployment URL. If merged to `master`, it will be automatically deployed.

## Scripts

The `./scripts` folder contains useful scripts or scripts that were used to generate data, scripts for data clean up etc.
To execute one of the scripts, you need to move the folder out of the repository file-tree on your hard disk into its own folder.
This is due to problems with TypeScript. Then, run

```
yarn
npm install -g ts-node@latest
ts-node carbon-emissions.ts # for example
```

to run the script.

## Useful links 

* [Mapbox examples](https://docs.mapbox.com/mapbox-gl-js/examples/)
* [Countries data](https://github.com/mledoze/countries)