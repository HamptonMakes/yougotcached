match(var("No-Cookie"), "true") {
	remove_header("Set-Cookie")
}
add_header("X-Moov-Cache", "true")