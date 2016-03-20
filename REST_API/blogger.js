function addPost() {

    $.ajax({
        url: "http://10.58.75.157:3000/posts",
        method: "POST",
        dataType: "json",
        data: {
            "title": $('#postTitle').val(),
            "body": $('#postBody').val()
        },
        success: function(response) {
            console.log(response);
        }
    });
}


function initiateApiClient() {

    var apiClient = new $.RestClient('http://10.58.75.157:3000/');
    apiClient.add('posts');
    apiClient.posts.add('comments');


    return apiClient;
}


function loadCommentsForPost(postId, apiClient) {

    apiClient.posts.comments.read(postId).done(function(loadedData){
        console.log(loadedData);
        $('#comments').html(JSON.stringify(loadedData, ['id', 'name'], '  '));
        $.each(loadedData, function(index, comment){
            console.log(comment.name);
        });
    });
}

var client = initiateApiClient();
loadCommentsForPost(3, client);








