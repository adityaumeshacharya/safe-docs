import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for safeDocsAngularApp', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be safeDocsAngularApp', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('safeDocsAngularApp');
    })
  });

  it('navbar-brand should be safe-docs@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('safe-docs@0.0.1');
  });

  
    it('Documents component should be loadable',() => {
      page.navigateTo('/Documents');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Documents');
    });

    it('Documents table should have 3 columns',() => {
      page.navigateTo('/Documents');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  

});
