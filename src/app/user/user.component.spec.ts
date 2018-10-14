import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('User Component Test cases', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it('User Component should be created', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const userCompo = fixture.debugElement.componentInstance;
    expect(userCompo).toBeTruthy();
  });

  it('should use the username property (in User Component) whose value is injectd from User service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const userCompo = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService); // getting an instances of userService from  userComponent itself
    fixture.detectChanges(); // This detectChanges() method should run bcoz - UserService method has injected
    // user.name prop value into user.myName property in the UserCOmponent after the User COmponent is
    // initialized (onInit), thus user.myName property value was initially null but later changed to 'Tejas'
    // After Injecting service (userService). Thus must run  fixture.detectChanges(); to detect this change of
    // value After dependency Injection
    expect(userService.user.name).toEqual(userCompo.userObj.myName);

    expect(userCompo.userObj.myName).toEqual(userService.user.name);

  });

  it('should have a instances of UserService ', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const userCompo = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService).toBeTruthy();

  });

  it('should display user name if logged in !!', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const userCompo = fixture.debugElement.componentInstance;
    userCompo.isLoggedIn = true; // accessing isLoggedIn property, making it to false
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; // compiled to get html/template
    expect(compiled.querySelector('p').textContent).toContain(userCompo.userObj.myName);

  });

  it('shouldnot display user name if not logged in !!', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const userCompo = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; // compiled to get html/template
    expect(compiled.querySelector('p').textContent).not.toContain(userCompo.userObj.myName);

  });

  // !async testing
  it('shouldnot fetch backend data successfully if not called asynchronously', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const userCompo = fixture.debugElement.componentInstance;
    // !To get surName, We need to write a reachout backend server BUT this should not be done
    // !rather we need to mock/fake data which will be returned by backend server and check with surName
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getSurNameFromBackend')
      .and.returnValue(Promise.resolve('Sabunkar'));

    // spyOn(dataService, 'getSurNameFromBackend') 1st argum is service Instance provided in component and
    // 2nd argum is methodName which we want to spyOn fake/mock on

    // getSurNameFromBackend() is function which fetch data from backend, using spyOn func we r mocking
    // or faking this functions returend value.

    fixture.detectChanges(); // running change detections
    expect(userCompo.surName).toBe(undefined); // expecting undefined value fetched from backend and passed
    // to surName property bcoz- above test code doesnot run asyn way/manner

  });

  // !proper way of doing async testing
  it('should fetch backend data successfully if called asynchronously using ASYNC', async(
    () => { // async() -> will run as if doing perfroming async tasks

      const fixture = TestBed.createComponent(UserComponent);
      const userCompo = fixture.debugElement.componentInstance;
      const dataService = fixture.debugElement.injector.get(DataService);
      const spy = spyOn(dataService, 'getSurNameFromBackend')
        .and.returnValue(Promise.resolve('Sabunkar'));

      fixture.detectChanges();
      fixture.whenStable().then(() => { // when async task has been finished/done (after 2sec or fetching data from DB)
        // i.e- when stable then run below test expect() method
        expect(userCompo.surName).toBe('Sabunkar');
      });

    }
  ) // end of async() func
  ); // end of it()


  it('should fetch backend data successfully if called asynchronously using FAKEASYNC', fakeAsync(
    () => {

      const fixture = TestBed.createComponent(UserComponent);
      const userCompo = fixture.debugElement.componentInstance;
      const dataService = fixture.debugElement.injector.get(DataService);
      const spy = spyOn(dataService, 'getSurNameFromBackend')
        .and.returnValue(Promise.resolve('Sabunkar'));

      fixture.detectChanges();
      tick(); // tick() -> means finish all async tasks and then continue with next line of code
      expect(userCompo.surName).toBe('Sabunkar');

    }
  ) // end of async() func
  ); // end of it()





});
