/*
    When a button with class .remove-btn is clicked a post request
    will be sent to /remove with the note id to be removed.
*/
$(document).ready(function() {
    $('.remove-btn').click(function() {
        $.ajax({
            data: {
                id: $(this).val()
            },
            type: 'POST',
            url: '/remove'
        }).done(function() {
            location.reload();
        });
    });
});