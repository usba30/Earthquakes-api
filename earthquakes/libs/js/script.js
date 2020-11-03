	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				 north: parseFloat($('#north').val()),
				 south: parseFloat($('#south').val()),
                                 east: parseFloat($('#east').val()),
                                 west: parseFloat($('#west').val())
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					
					$('#txtDepth').html(result['data'][0]['depth']);
					$('#txtLng').html(result['data'][0]['lng']);
					$('#txtSrc').html(result['data'][0]['src']);
					$('#txtMagnitude').html(result['data'][0]['magnitude']);
                                        $('#txtLat').html(result['data'][0]['lat']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});