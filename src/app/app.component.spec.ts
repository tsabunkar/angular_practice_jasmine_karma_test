/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App Component Test case', () => {
  //! under describe block we write all the test cases(it block)

  beforeEach(() => { //!This beforeEach() func will be run , before running each test case (it block) 
    TestBed.configureTestingModule({
      declarations: [ //declaring the component which we want to test
        AppComponent
      ],
    });
  });
  //TestBed is a main angular utility object, using configureTestingModule() func we r configuring the
  // test cases



  it('should create the app compnent', async(() => {
    //each it block is like -> individual Test cases
    let fixture = TestBed.createComponent(AppComponent); //in each it() func We should
    // create the component which We need to test, this component is stored in fixture varaible
    let appComponet = fixture.debugElement.componentInstance; //debugElement is a property which provides componentInstance
    expect(appComponet).toBeTruthy(); //We expect app component to be created/exist
  }));


  it(`should have as title`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('This is the title properties value');
    //we expect the app compoent to have title property whose value would be This is the title properties value
    //i.e -> title -> 'This is the title properties value'
  }));


  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //detectChanges() is used to detect any changes in the dom, bcoz change
    // detection doesnot happen as we r not using real browser, rather a karma browser
    let compiled = fixture.debugElement.nativeElement; //nativeElement -> gives access to template/html
    expect(compiled.querySelector('h1').textContent).toContain('This is the title properties value');
    //compiled.querySelector('h1').textContent -> vanilla js code
  }));

  it('should have a property as empname whose value is Tejas', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.empname).toEqual('Tejas');
  }))



  it('should render title in a p tag inside the p tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Tejas');

  }));

  it('should have a property as isMarried whose value is false', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.isMarried).toEqual(false)
  }))

  it('should have a property as age whose value is 24', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.age).toEqual(24);
  }))

  it('Age should be less than or equal to 24', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.age).toBeLessThanOrEqual(24);
  }))


  it('should have array as-> empArray', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.empArray).toBeTruthy(); //emparray exists
  }))

  it('empArray should have properties like ->  empname,isMarried,age ', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.empArray[0].empname).toBeTruthy(); //empname exists
    expect(app.empArray[0].isMarried).toBeFalsy(); //isMarried exists return false;
    expect(app.empArray[0].age).toBeTruthy(); //age exists


  }))

  it('empArray should have properties like ->  empname,isMarried,age with values ', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.empArray[0].empname).toBe('Tejas');
    expect(app.empArray[0].isMarried).toBe(false);
    expect(app.empArray[0].age).toBe(24);

    expect(app.empArray[0].empname).toEqual('Tejas');
    expect(app.empArray[0].isMarried).toEqual(false);
    expect(app.empArray[0].age).toEqual(24);

  }))





});

