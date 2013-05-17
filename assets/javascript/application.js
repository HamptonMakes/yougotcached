/* Default JS */

$(function() {
	$.ajax(document.location.href, {
		headers: {"X-Requested-With": "CacheRequest"},
		data: {"_mw_cached_fragments": "true"},
		cache: false,
		dataType: "json",
		success: function(data, textStatus, jqXHR ) {
			for (var i = 0; i < data.length; i++) {
			    //data[i]
			    $("span[data-cache-hold=" + (i+1) + "]").replaceWith(data[i])
			    //Do something
			}
		}
	})
	$("").each(function(index, elem) {
		console.log(elem)
	})
})