(function($) {
    $.fn.splitToColumns = function() {
        var columns = this;
        var items = columns.first().children();

        var count = items.length;
        var colcount = Math.ceil(count/columns.length);

        for(var i=1;i<columns.length;i++) {
            var column = columns.eq(i);
            for(var j=0;j<colcount;j++) {
                var el = items.eq(colcount*i+j);
                column.append(el);
            }
        }
    }
})(jQuery);