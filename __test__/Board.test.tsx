// import BoardItem from "@/components/Board/components/BoardItem";
// import { render, screen } from "@testing-library/react";
// import { ThemeProvider } from "styled-components";
// import dark from "@/themes/dark";

// describe("Board Component", () => {
//   describe("Board Item Component", () => {

//     it("should have Board Item Component empty image", () => {
//        const handleSelected = jest.fn();
//        render(
//          <ThemeProvider theme={dark}>
//            <BoardItem
//              item={{
//                id: 1,
//                name: "chicken",
//                visible: false,
//              }}
//              handleSelected={handleSelected}
//            />
//          </ThemeProvider>
//        );
//       const boarditemImage = screen.getByTestId("boarditem-image");
//       expect(boarditemImage).toHaveAttribute(
//         "src",
//         "https://i.ibb.co/F7RZG9j/empty.png"
//       );
//     });

//     it("should have Board Item Component chicken image", () => {
//        const handleSelected = jest.fn();
//        render(
//          <ThemeProvider theme={dark}>
//            <BoardItem
//              item={{
//                id: 1,
//                name: "chicken",
//                visible: true,
//              }}
//              handleSelected={handleSelected}
//            />
//          </ThemeProvider>
//        );
//       const boarditemImage = screen.getByTestId("boarditem-image");
//       expect(boarditemImage).toHaveAttribute(
//         "src",
//         "https://i.ibb.co/MyHjK09/chicken.png"
//       );
//     });
//   });
// });
