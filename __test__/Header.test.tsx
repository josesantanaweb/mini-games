// import BetLimit from "@/components/Header/components/BetLimit";
// import Wallet from "@/components/Header/components/Wallet";
import Brand from "@/components/game-header/components/brand";
import { render, screen  } from "@testing-library/react";

describe("Header Component", () => {
  describe("Brand Header Component", () => {
    beforeEach(() => {
      render(
        <Brand />
      );
    });

    it("should have Brand Component text logo", () => {
      const brandText = screen.getByTestId("brand-text").innerHTML;
      expect(brandText).toBe("Pim Pam Pollo");
    });
  });

  // describe("Wallet Header Component", () => {
  //   beforeEach(() => {
  //     render(
  //       <ThemeProvider theme={dark}>
  //         <Wallet amount={100} />
  //       </ThemeProvider>
  //     );
  //   });

  //   it("should have Wallet Component amount", () => {
  //     const walletAmount = screen.getByTestId("wallet-amount").innerHTML;
  //     expect(walletAmount).toBe("100");
  //   });

  //   it("should have Wallet Component currency", () => {
  //     const walletCurrency = screen.getByTestId("wallet-currenry").innerHTML;
  //     expect(walletCurrency).toBe("USD");
  //   });
  // });

  // describe("BetLimit Component", () => {
  //   beforeEach(() => {
  //     render(
  //       <ThemeProvider theme={dark}>
  //         <BetLimit amount={100} minLimitActive />
  //       </ThemeProvider>
  //     );
  //   });

  //   it("should have BetLimit Component label", () => {
  //     const betlimitText = screen.getByTestId("betlimit-text").innerHTML;
  //     expect(betlimitText).toBe("Min de Apuesta:");
  //   });

  //   it("should have BetLimit Component amount", () => {
  //     const betlimitAmount = screen.getByTestId("betlimit-amount").innerHTML;
  //     expect(betlimitAmount).toBe("100");
  //   });
  // });
});

