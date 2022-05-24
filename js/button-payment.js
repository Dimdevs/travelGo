   $(function () {
            $('.increment').click(function () {
                var valueElement = $('#' + $(this).siblings('input').attr('id'));

                if ($(this).hasClass('plus')) {
                    valueElement.val(Math.max(parseInt(valueElement.val()) + 1));
                }
                else if (valueElement.val() > 0) // Stops the value going into negatives
                {
                    valueElement.val(Math.max(parseInt(valueElement.val()) - 1));
                }

                return false;
            });

        });