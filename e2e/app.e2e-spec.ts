import { TodoListTechnionPage } from './app.po';

describe('todo-list-technion App', function() {
  let page: TodoListTechnionPage;

  beforeEach(() => {
    page = new TodoListTechnionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
