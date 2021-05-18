import "./style.css";
const {
    merge
} = require('webpack-merge');

// export default (text = "Hello world!!") => {
//     // const output = merge({
//     //     a: [1],
//     //     b: 5,
//     //     c: 20
//     // }, {
//     //     a: [2],
//     //     b: 10,
//     //     d: 421
//     // }, {
//     //     a: [2],
//     //     b: 12,
//     //     d: 421
//     // });
//     // console.log(output);
//     const element = document.createElement("div");
//     element.innerHTML = text;
//     return element;
// };

// export default (text = "Hello world") => {
//     const element = document.createElement("div");
//     element.className = "rounded bg-red-100 border max-w-md m-4 p-4";
//     element.innerHTML = text;
//     return element;
// };

export default (text = "Hello world") => {
    const element = document.createElement("div");
    element.className = "rounded bg-red-100 border max-w-md m-4 p-4";
    element.innerHTML = text;
    element.onclick = () =>
      import("./lazy")
        .then((lazy) => {
          element.textContent = lazy.default;
        })
        .catch((err) => console.error(err));
  
    return element;
  };