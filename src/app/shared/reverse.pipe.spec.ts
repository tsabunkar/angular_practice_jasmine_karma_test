import { ReversePipe } from './reverse.pipe';

// !Isolated test case -
describe('Pipe: ReversePipe (Isolated test case)', () => {

  it('should reverse the hello value to olleh', () => {
    const reversePipe = new ReversePipe(); // Instianiting the ReversePipe Object
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});


