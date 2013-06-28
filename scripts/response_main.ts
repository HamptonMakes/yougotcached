# This enables ESI at the Varnish level if this
# is set
# TODO: This should be in the esi mixer 
match(var("ESI")) {
  add_header("X-ESI", "true")
}

# This is enables us to export caching headers
# TODO: This should be in the cache mixer
match(var("Cache")) {
  with(/force/) {
    remove_header("Set-Cookie")
    add_header("X-Moov-Cache", "true")
  }
  with(/true/) {
    add_header("X-Moov-Cache", "true")
  }
}