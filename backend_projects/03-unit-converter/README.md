# Unit Converter

This Webapp allows users to convert between of different measurement units in systems of measurement.

Project based on [Unit Converter][link-1] from [Roadmap Ideas Backend Projects][link-2]

See my demo at [here][link-to-demo]

## Features

### ONGOING develop the advanced features <sup>[notes](#notes)</sup>

-   [ ] **Conversion of Units Measurements**: Allow convert between different units: Length, Temperature, Volume (Capacity), Weight (Mass).

1. [x] Length Converter - DONE 🎉
2. [x] Temperature Converter - DONE 🎉
3. [ ] Weight Converter - ONGOING

## Getting started

### Prerequisites

-   1.**Node.js** Installed on your machine (version 18 or higher).
-   2.**Express** Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js.
-   4.**Other Packages Support** Packages support: DotENV, CORS, Helmet, Nodemon.

### Installation

-   1.**Clone the reposity** or **Copy the folder project to your root**
-   2.**Navigate to the project directory**
-   3.**Install NPM**

```bash
cd backend_projects/03-unit-converter
# install dependencies packages
npm install
# start server web app
npm run start
# then check client webapp in the public_html folder
```

### Usage

Conversion Units of Measurement through APIs. If you want to see the APIs, please start the server and follow by API's links.

-   1.**Convert Unit Measurement**:

```bash
//api/converter/:unitSystem/:from-:to/:value
```

-   2.**Get the symbols of unit system**

```bash
//api/symbols/:unitSystem
```

## Notes

For now, this is the first version of the app. I'm dedicated to making it better. Expect more advanced features in the future.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Author

Iam Pine

---

Happy Coding And More!

[link-1]: https://roadmap.sh/projects/unit-converter
[link-2]: https://roadmap.sh/projects?g=backend
[link-to-demo]: https://github.com/Pine1611/roadmap.sh-projects-ias/tree/main/backend_projects/03-unit-converter
