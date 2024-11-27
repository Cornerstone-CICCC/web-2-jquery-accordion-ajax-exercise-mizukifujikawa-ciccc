$(function() {
  // your code here
  $('.accordion h3').on('click', function() {
    $(this).next('div').slideToggle();
    $('.accordion h3').not(this).next('div').slideUp();
  })

  $('.todos button').on('click', function() {
    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function(response) {
        const todoList = $('.todos button').siblings('ul');
        response.todos.forEach(todo => {
          todoList.append(`<li>${todo.todo}</li>`);
        });
      },
      error: function(error) {
        console.error('Error fetching todos:', error);
      }
    })
  })
})