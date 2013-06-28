@namespace cache, tritium, jsonlib

@func force() {
  export("Cache", "force")
}

@func enable() {
  export("Cache", "true")
}

@func Text.html(Text %enc, Text %path) {
  %matcher = /_mw_cached_fragments=true/

  html(%enc) {
    $("/") {
      insert_after("cachebox")
    }
    $("")

    yield()

    $("/cachebox") {
      match(%path) {
        with(%matcher) {
          force()
          jsonlib.array() {
            $("/cachebox/*") {
              jsonlib.append(fetch("."))
            }
          }

        }
        else() {
          remove()
        }
      }
    }
  }
  match(%path) {
    with(%matcher) {
      jsonlib.set_json()
    }
  }
}


@func XMLNode.dynamic_section() {
  insert_at("after", "span", _mw_temporary: "truecache")
  move_to("/cachebox")
  $("/cachebox/*") {
    $cacher_count = index()
  }
  $("//span[@_mw_temporary]") {
    attributes(data-cache-hold: $cacher_count)
    attribute("_mw_temporary") { remove() }
  }
}