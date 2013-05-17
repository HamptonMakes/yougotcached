# HTML Transformations go here

export("Cache-Time", "1200")

$("/html") {
  rewrite_links()
  absolutize_srcs()

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
  

  $$(".dynamic") {
    dynamic_section()
  }
}
