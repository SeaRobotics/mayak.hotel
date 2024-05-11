jQuery(function($) {
    $('body').on('click', '.view-post', function() {
        var data = {
            'action': 'load_post_by_ajax',
            'id': $(this).data('id'),
            'services':blog.services
          
        };
  
        $.post(blog.ajaxurl, data, function(response) {
            response = JSON.parse(response);
            $('#postModal h5#postModalLabel').text(response.title);
            $('#postModal .modal-body_2').html(response.content);
            $('#postModal .acf_2').html(response.acf);
           
 
            $('#postModal').modal({show:true});
        });
    });

    $('body').on('click', '.js-open-event-form', function(e) {
        e.preventDefault();
        $('#eventFormModal').modal({show: true});
    })

    $('.event-form').on('submit', function(e) {
        e.preventDefault();

        let $form = $(e.target);
        let $wrapper = $form.closest('.modal-dialog');
        let msgClass = 'form-response';
        let errClass = '-err';
        let scsClass = '-scs';
        
        let data = $form.serializeArray();
        data.push({
            name: 'action',
            value: 'send_event_form',

        },{
            name: 'services',
            value: blog.services,

        });

        
        $wrapper.find('.' + msgClass).remove();
        $form.find('[data-form-element]').removeClass('is-error');

        $wrapper.addClass('-loading');

        $.ajax({
            url: blog.ajaxurl,
            method: 'POST',
            data: data,
            dataType: 'json',
        }).done(function(resp) {
            let respClass = msgClass;
            if (resp.success) {
                respClass += ' ' + scsClass;
                $form.hide();
            } else {
                respClass += ' ' + errClass;
                if (resp.elements) {
                    for (el of resp.elements) {
                        let $input = $form.find('[name="' + el.name +'"]').closest('[data-form-element]');
                        $input.addClass('is-error');
                        $input.append('<div class="' + msgClass + ' ' + errClass + '">'+ el.message +'</div>');
                    }
                }
            }
            if (resp.message) {
                $form.after('<div class="alert ' + msgClass + ' ' + respClass + '">'+ resp.message +'</div>');
            }

        })
        .always(function() {
            $wrapper.removeClass('-loading');
        });

    })
});