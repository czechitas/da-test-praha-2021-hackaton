describe("EXTERMINATORS - HACKATHON TEST SUITE", () => {
  it("Login from main page", () => {
    browser.reloadSession();
    browser.url("/");
    const signIn = $(".hide_xs");
    const emailField = $("#email");
    const passwordField = $("#passwd");
    const emailUser = "lolol@lol.com";
    const passwordUser = "7mChDmhuaxsFmk9";
    const submitButton = $("#SubmitLogin");
    const userName = $("#user_info_acc");
    signIn.click();
    emailField.setValue(emailUser);
    passwordField.setValue(passwordUser);
    submitButton.click();
    expect(userName.getText()).toEqual("Luca");
  });

  it("Main page room reservation", () => {
    browser.reloadSession();
    browser.url("/");
    const hamburgerMenu = $(".nav_toggle");
    const roomsLink = $('[href="/#hotelRoomsBlock"]');
    const bookRoomButtonMain = $(
      '//*[contains(@class, "button htlRoomTypeBookNow")]'
    );
    hamburgerMenu.click();
    roomsLink.click();
    bookRoomButtonMain.click();
  });
  it.only("Room reservation from the room page", () => {
    browser.reloadSession();
    browser.url("/home/1-super-delux-rooms.html");
    const bookRoomButtonBooked = $("[name='Submit']");
    const iconCheck = $(".icon-check");
    const checkoutButton = $('[title="Proceed to checkout"]');
    const nameField = $("#customer_firstname");
    const lastNameField = $("#customer_lastname");
    const email = $("#email");
    const adressOne = $("#address1");
    const cityField = $("#city");
    const zipCodeField = $("#postcode");
    const mobilePhoneField = $$("#phone_mobile")
    const addressTitleField = $("#alias");
    const submitReservationButton = $("#submitAddress");
    bookRoomButtonBooked.click();
    expect(iconCheck).toBeDisplayed();
    checkoutButton.click();
    $('[class="btn btn-default button button-medium pull-right"]').click();
    browser.pause(3000);
    $("#opc_guestCheckout").click();
    nameField.setValue("luca");
    email.setValue("lo@lo.cz");
    lastNameField.setValue("cula");
    mobilePhoneField[0].setValue("111111111");
    adressOne.setValue("luccino kralovstvi 11");
    cityField.setValue("praha");
    zipCodeField.setValue("11111");
   addressTitleField.setValue("moje skvela adresa");
   mobilePhoneField[1].setValue("111111111");
//at this point the test was failing, we tried to check documentation of webdriver.io, but didn't succeed; continuing on this test is a thing we  put in our future plans
    submitReservationButton.click();
  });
});
