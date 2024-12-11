import LOGIN from "../../support/page object/login.cy";
import LINK from "../../support/page object/link.cy";
import LOGOUT from "../../support/page object/logout.cy";
import Dynamic from "../../support/page object/DynamicContentTest.cy";

describe('', () => {


    const login1 = new LOGIN();
    const link1 = new LINK();
    const logout1 = new LOGOUT();
    const Scroll = new Dynamic();

    it('', () => {
        login1.EnterUrl();
        login1.loginOrm();
        link1.clickLink('Admin');
        logout1.LogoutClick();
        Scroll.Url();
        Scroll.scroll();
        
    });
});
