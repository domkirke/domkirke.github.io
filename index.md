---
layout: default
---


<div class="home">
  {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%}

  {%- include filters.html -%}

  {% if site.paginate %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts %}
  {% endif %}


  {%- if posts.size > 0 -%}
    {%- if page.list_title -%}
      <h2 class="post-list-heading">{{ page.list_title }}</h2>
    {%- endif -%}

    <div id="post_grid">
    {%- for post in posts -%}
    {%- include grid_preview.html post_content=post -%}
    {%- endfor -%}
    <!--
    <ul class="post-list">
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {%- for post in posts -%}
      <li>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>
    -->
    {% if site.paginate %}
      <div class="pager">
        <ul class="pagination">
        {%- if paginator.previous_page %}
          <li><a href="{{ paginator.previous_page_path | relative_url }}" class="previous-page">{{ paginator.previous_page }}</a></li>
        {%- else %}
          <li><div class="pager-edge">•</div></li>
        {%- endif %}
          <li><div class="current-page">{{ paginator.page }}</div></li>
        {%- if paginator.next_page %}
          <li><a href="{{ paginator.next_page_path | relative_url }}" class="next-page">{{ paginator.next_page }}</a></li>
        {%- else %}
          <li><div class="pager-edge">•</div></li>
        {%- endif %}
        </ul>
      </div>
    {%- endif %}
  {%- endif -%}

</div>

{%- include biography.html -%}
<script>
  function removeBio() {
    document.getElementById("biography").style.display = "none";
  }
  document.querySelector("#biography").onclick = () => {removeBio();}
</script>


<script>

  let disabled_tag_color = "rgb(200, 200, 200)";
  let enabled_tag_color = "rgb(0, 0, 0)";

  function getAreas() {
    let filters = Array.from(document.getElementsByClassName("area_item"));
    return filters;
  }

  function getTags() {
    let filters = Array.from(document.getElementsByClassName("tag_item"));
    return filters;
  }

  function toggleArea(filter) {
    index = filters.indexOf(filter)
    if (index == -1) {
      filters.push(filter);
    } else {
      let filters_tmp = [];
      for (let i = 0; i < filters.length; ++i) {
        if (i != index) {
          filters_tmp.push(filters[i]);
        }
      }
      filters = filters_tmp
    }
    updateFilters(); 
  }

  function toggleTag(tag) {
    console.log("current", current_tag, "tag", tag);
    if (current_tag === undefined) {
      filters = [tag];
      current_tag = tag;
    } else if (current_tag != tag) {
      filters = [tag];
      current_tag = tag; 
    } else {
      filters = tag_list.filter(() => true);
      current_tag = undefined;  
    }
    updateFilters();
  }

  function updateFilters() {
    // color tags
    let areas = getAreas();
    for (let i = 0; i < areas.length; i ++) {
      if (filters.indexOf(areas[i].id) == -1) {
        areas[i].style.color = disabled_tag_color;
      } else {
        areas[i].style.color = enabled_tag_color;
      }
    }

    let tags = getTags();
    for (let i = 0; i < tags.length; i ++) {
      console.log(current_tag, tags[i].id);
      if ((tags[i].id == current_tag) || (current_tag === undefined)) {
        tags[i].style.color = enabled_tag_color;
      } else {
        tags[i].style.color = disabled_tag_color;
      }
    }
    // show/hide posts
    let posts = Array.from(document.getElementsByClassName("post_preview"));
    for (let i = 0; i < posts.length; i ++) {
      let tags = posts[i].getAttribute("tags").split(";");
      let hide = true;
      for (let j = 0; j < tags.length; j ++) {
        if (filters.indexOf(tags[j]) > -1) {
          hide = false;
        }
      }
      if (hide) {
        posts[i].style.display = "none";
      } else {
        posts[i].style.display = "inline-block";
      }
    } 
  }

  var area_list = [];
  var tag_list = [];
  var current_tag = undefined;
  // init areas
  let area_items = document.getElementsByClassName("area_item");
  for (let i = 0; i < area_items.length; i ++ ) {
    area_items[i].onclick = function () { toggleArea(area_items[i].id); }
    area_list.push(area_items[i].id);
  } 
  // init tags
  let tag_items = document.getElementsByClassName("tag_item");
  for (let i = 0; i < tag_items.length; i ++ ) {
    tag_items[i].onclick = function () { toggleTag(tag_items[i].id); }
    tag_list.push(tag_items[i].id);
  } 
  // init filters
  var filters = area_list.filter(() => true);
</script>