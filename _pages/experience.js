// /** @jsx jsx */
// import { jsx } from "theme-ui";

// const Spacer = ({ height, width, children }) => {
//   return (
//     <div
//       sx={{ minHeight: `${height}`, minWidth: `${width}`, maxWidth: "100vw" }}
//     >
//       {children}
//     </div>
//   );
// };

// function Experience({ nodes, orientation }) {
//     return (
//       <div>
//         <div sx={{ display: ["initial", "initial", "none", "none"]}}>
//           <HorizontalExperience nodes={nodes}  orientation={"horizontal"}/>
//         </div>
//         <div sx={{ display: ["none", "none", "initial", "initial"]}}>
//           <VerticalExperience nodes={nodes} orientation={"vertical"}/>
//         </div>
//       </div>
//     );
//   }