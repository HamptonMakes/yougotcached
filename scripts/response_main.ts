match(var("No-Cookie"), "true") {
	remove_header("Set-Cookie")
}