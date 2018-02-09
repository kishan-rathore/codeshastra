<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jsPDF/from_html.js at master · MrRio/jsPDF · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="MrRio/jsPDF" name="twitter:title" /><meta content="jsPDF - JavaScript PDF generation for legends. HTML5 FTW." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/47539?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/47539?v=3&amp;s=400" property="og:image" /><meta content="MrRio/jsPDF" property="og:title" /><meta content="https://github.com/MrRio/jsPDF" property="og:url" /><meta content="jsPDF - JavaScript PDF generation for legends. HTML5 FTW." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="6F77E70A:19E0:12E5112E:565DD5C7" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="New repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="ab8aaff3c5a9172653ed9dfe4752213b0839f6ff" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5e2d1232bc97970f293f259bcb6ab137945cb5635b398c2a81027bf21f0255c8.css" integrity="sha256-Xi0SMryXlw8pPyWby2qxN5RctWNbOYwqgQJ78h8CVcg=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-bcce22057877160838a39c51a6270cf95fb927fc317253965cdbc182f32be960.css" integrity="sha256-vM4iBXh3Fgg4o5xRpicM+V+5J/wxclOWXNvBgvMr6WA=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="3cf195f8aa0cc4097aecade8ff90cc36">

      
  <meta name="description" content="jsPDF - JavaScript PDF generation for legends. HTML5 FTW.">
  <meta name="go-import" content="github.com/MrRio/jsPDF git https://github.com/MrRio/jsPDF.git">

  <meta content="47539" name="octolytics-dimension-user_id" /><meta content="MrRio" name="octolytics-dimension-user_login" /><meta content="402046" name="octolytics-dimension-repository_id" /><meta content="MrRio/jsPDF" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="402046" name="octolytics-dimension-repository_network_root_id" /><meta content="MrRio/jsPDF" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/MrRio/jsPDF/commits/master.atom" rel="alternate" title="Recent Commits to jsPDF:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2FMrRio%2FjsPDF%2Fblob%2Fmaster%2Fplugins%2Ffrom_html.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/MrRio/jsPDF/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/MrRio/jsPDF/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2FMrRio%2FjsPDF"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/MrRio/jsPDF/watchers">
    311
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FMrRio%2FjsPDF"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/MrRio/jsPDF/stargazers">
      5,057
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FMrRio%2FjsPDF"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/MrRio/jsPDF/network" class="social-count">
      1,133
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="/MrRio" class="url fn" itemprop="url" rel="author"><span itemprop="title">MrRio</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/MrRio/jsPDF" data-pjax="#js-repo-pjax-container">jsPDF</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/MrRio/jsPDF/issues/counts">

  <a href="/MrRio/jsPDF" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /MrRio/jsPDF">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="/MrRio/jsPDF/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /MrRio/jsPDF/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">214</span>

</a>
  <a href="/MrRio/jsPDF/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /MrRio/jsPDF/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">29</span>

</a>
    <a href="/MrRio/jsPDF/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /MrRio/jsPDF/wiki">
      <span class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="/MrRio/jsPDF/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /MrRio/jsPDF/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/MrRio/jsPDF/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /MrRio/jsPDF/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container repo-container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/MrRio/jsPDF/blob/67310a9244011256abf5edb72e8d819a5229e7b4/plugins/from_html.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:870f42108cef1f073275779a17d46809 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/FileWriter/plugins/from_html.js"
               data-name="FileWriter"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="FileWriter">
                FileWriter
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/experimental-blob-support/plugins/from_html.js"
               data-name="experimental-blob-support"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="experimental-blob-support">
                experimental-blob-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/gh-pages/plugins/from_html.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/ie-shim/plugins/from_html.js"
               data-name="ie-shim"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ie-shim">
                ie-shim
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/jspdf-2/plugins/from_html.js"
               data-name="jspdf-2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="jspdf-2">
                jspdf-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/MrRio/jsPDF/blob/master/plugins/from_html.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/merge-lifof/plugins/from_html.js"
               data-name="merge-lifof"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="merge-lifof">
                merge-lifof
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/pr/134/plugins/from_html.js"
               data-name="pr/134"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pr/134">
                pr/134
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/pr/189/plugins/from_html.js"
               data-name="pr/189"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pr/189">
                pr/189
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/MrRio/jsPDF/blob/tables/plugins/from_html.js"
               data-name="tables"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="tables">
                tables
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.272/plugins/from_html.js"
                 data-name="v1.0.272"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.272">v1.0.272</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.178/plugins/from_html.js"
                 data-name="v1.0.178"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.178">v1.0.178</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.150/plugins/from_html.js"
                 data-name="v1.0.150"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.150">v1.0.150</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.138/plugins/from_html.js"
                 data-name="v1.0.138"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.138">v1.0.138</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.119/plugins/from_html.js"
                 data-name="v1.0.119"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.119">v1.0.119</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.116/plugins/from_html.js"
                 data-name="v1.0.116"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.116">v1.0.116</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.115/plugins/from_html.js"
                 data-name="v1.0.115"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.115">v1.0.115</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v1.0.106/plugins/from_html.js"
                 data-name="v1.0.106"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.106">v1.0.106</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/v0.9.0/plugins/from_html.js"
                 data-name="v0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.0">v0.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MrRio/jsPDF/tree/1.1.135/plugins/from_html.js"
                 data-name="1.1.135"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.135">1.1.135</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/MrRio/jsPDF/find/master"
            class="js-show-file-finder btn btn-sm"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/MrRio/jsPDF" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jsPDF</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/MrRio/jsPDF/tree/master/plugins" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">plugins</span></a></span><span class="separator">/</span><strong class="final-path">from_html.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/MrRio/jsPDF/commit/e24fab274bae78163080d2cdf79876f1fc65718a" data-pjax>
          e24fab2
        </a>
        <time datetime="2015-05-15T21:35:00Z" is="relative-time">May 15, 2015</time>
      </span>
      <div>
        <img alt="@MrRio" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/47539?v=3&amp;s=40" width="20" />
        <a href="/MrRio" class="user-mention" rel="author">MrRio</a>
          <a href="/MrRio/jsPDF/commit/e24fab274bae78163080d2cdf79876f1fc65718a" class="message" data-pjax="true" title="Refactor jspdf.plugin.* to plugins/*">Refactor jspdf.plugin.* to plugins/*</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@MrRio" height="24" src="https://avatars0.githubusercontent.com/u/47539?v=3&amp;s=48" width="24" />
            <a href="/MrRio">MrRio</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/MrRio/jsPDF/raw/master/plugins/from_html.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/MrRio/jsPDF/blame/master/plugins/from_html.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/MrRio/jsPDF/commits/master/plugins/from_html.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      1087 lines (1028 sloc)
      <span class="file-info-divider"></span>
    35.3 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/** @preserve</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               2014 Diego Casorran, https://github.com/diegocr</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               2014 Daniel Husar, https://github.com/danielhusar</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               2014 Wolfgang Gassler, https://github.com/woolfg</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *               2014 Steven Spungin, https://github.com/flamenco</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Permission is hereby granted, free of charge, to any person obtaining</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * a copy of this software and associated documentation files (the</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &quot;Software&quot;), to deal in the Software without restriction, including</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * without limitation the rights to use, copy, modify, merge, publish,</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * distribute, sublicense, and/or sell copies of the Software, and to</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * permit persons to whom the Software is furnished to do so, subject to</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * the following conditions:</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The above copyright notice and this permission notice shall be</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * included in all copies or substantial portions of the Software.</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ====================================================================</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> (<span class="pl-smi">jsPDFAPI</span>) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> clone,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">	DrillForContent,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">	FontNameDB,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">	FontStyleMap,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">	FontWeightMap,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">	FloatMap,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">	ClearMap,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">	GetCSS,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">	PurgeWhiteSpace,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">	Renderer,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">	ResolveFont,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">	ResolveUnitedNumber,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">	UnitedNumberMap,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">	elementHandledElsewhere,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">	images,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">	loadImgs,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">	checkForFooter,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">process</span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">	tableToJson;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">	clone <span class="pl-k">=</span> (<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-k">function</span> (<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">Clone</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> obj;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Clone</span>()</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">Clone</span>() {}</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">	})();</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">PurgeWhiteSpace</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">array</span>) {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> fragment,</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">		i,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">		l,</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">		lTrimmed,</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">		r,</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">		rTrimmed,</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">		trailingSpace;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">		l <span class="pl-k">=</span> <span class="pl-smi">array</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		fragment <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">		lTrimmed <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">		rTrimmed <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (<span class="pl-k">!</span>lTrimmed <span class="pl-k">&amp;&amp;</span> i <span class="pl-k">!==</span> l) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			fragment <span class="pl-k">=</span> array[i] <span class="pl-k">=</span> array[i].<span class="pl-en">trimLeft</span>();</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (fragment) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">				lTrimmed <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">			i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> l <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (l <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>rTrimmed <span class="pl-k">&amp;&amp;</span> i <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">			fragment <span class="pl-k">=</span> array[i] <span class="pl-k">=</span> array[i].<span class="pl-en">trimRight</span>();</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (fragment) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">				rTrimmed <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">			i<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">		r <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">		trailingSpace <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (i <span class="pl-k">!==</span> l) {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Leave the line breaks intact</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (array[i] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>2028<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">				fragment <span class="pl-k">=</span> array[i].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (trailingSpace) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">					fragment <span class="pl-k">=</span> <span class="pl-smi">fragment</span>.<span class="pl-en">trimLeft</span>();</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (fragment) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">					trailingSpace <span class="pl-k">=</span> <span class="pl-smi">r</span>.<span class="pl-c1">test</span>(fragment);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">				array[i] <span class="pl-k">=</span> fragment;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">			i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> array;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">Renderer</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">pdf</span>, <span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span> <span class="pl-k">=</span> pdf;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> x;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> y;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">settings</span> <span class="pl-k">=</span> settings;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//list of functions which are called after each element-rendering process</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">watchFunctions</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-en">init</span>();</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">ResolveFont</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">css_font_family_string</span>) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> name,</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">		part,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">		parts;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">		name <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">		parts <span class="pl-k">=</span> <span class="pl-smi">css_font_family_string</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">		part <span class="pl-k">=</span> <span class="pl-smi">parts</span>.<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (<span class="pl-k">!</span>name <span class="pl-k">&amp;&amp;</span> part) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">			name <span class="pl-k">=</span> FontNameDB[<span class="pl-smi">part</span>.<span class="pl-en">trim</span>().<span class="pl-c1">toLowerCase</span>()];</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">			part <span class="pl-k">=</span> <span class="pl-smi">parts</span>.<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> name;</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">ResolveUnitedNumber</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">css_line_height_string</span>) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//IE8 issues</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">		css_line_height_string <span class="pl-k">=</span> css_line_height_string <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>0px<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> css_line_height_string;</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">css_line_height_string</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>em<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-c1">Number</span>(<span class="pl-smi">css_line_height_string</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>em<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)))) {</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			css_line_height_string <span class="pl-k">=</span> <span class="pl-c1">Number</span>(<span class="pl-smi">css_line_height_string</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>em<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)) <span class="pl-k">*</span> <span class="pl-c1">18.719</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">css_line_height_string</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>pt<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-c1">Number</span>(<span class="pl-smi">css_line_height_string</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>pt<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)))) {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			css_line_height_string <span class="pl-k">=</span> <span class="pl-c1">Number</span>(<span class="pl-smi">css_line_height_string</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>pt<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)) <span class="pl-k">*</span> <span class="pl-c1">1.333</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> normal,</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		undef,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		value;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">		undef <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">		normal <span class="pl-k">=</span> <span class="pl-c1">16.00</span>;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">		value <span class="pl-k">=</span> UnitedNumberMap[css_line_height_string];</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (value) {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">		value <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>xx-small<span class="pl-pds">&quot;</span></span>  <span class="pl-k">:</span>  <span class="pl-c1">9</span>,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>x-small<span class="pl-pds">&quot;</span></span>   <span class="pl-k">:</span> <span class="pl-c1">11</span>,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			small       <span class="pl-k">:</span> <span class="pl-c1">13</span>,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">			medium      <span class="pl-k">:</span> <span class="pl-c1">16</span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">			large       <span class="pl-k">:</span> <span class="pl-c1">19</span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>x-large<span class="pl-pds">&quot;</span></span>   <span class="pl-k">:</span> <span class="pl-c1">23</span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>xx-large<span class="pl-pds">&quot;</span></span>  <span class="pl-k">:</span> <span class="pl-c1">28</span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">			auto        <span class="pl-k">:</span>  <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">		}[{ css_line_height_string <span class="pl-k">:</span> css_line_height_string }];</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (value <span class="pl-k">!==</span> undef) {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> UnitedNumberMap[css_line_height_string] <span class="pl-k">=</span> value <span class="pl-k">/</span> normal;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (value <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(css_line_height_string)) {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> UnitedNumberMap[css_line_height_string] <span class="pl-k">=</span> value <span class="pl-k">/</span> normal;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">		value <span class="pl-k">=</span> <span class="pl-smi">css_line_height_string</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-cce">\.</span>]</span><span class="pl-k">+</span>)(px)<span class="pl-pds">/</span></span>);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">value</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> UnitedNumberMap[css_line_height_string] <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(value[<span class="pl-c1">1</span>]) <span class="pl-k">/</span> normal;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> UnitedNumberMap[css_line_height_string] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">GetCSS</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">element</span>) {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> css,tmp,computedCSSElement;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">		computedCSSElement <span class="pl-k">=</span> (<span class="pl-k">function</span> (<span class="pl-smi">el</span>) {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> compCSS;</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">			compCSS <span class="pl-k">=</span> (<span class="pl-k">function</span> (<span class="pl-smi">el</span>) {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">document</span>.<span class="pl-c1">defaultView</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">document</span>.<span class="pl-c1">defaultView</span>.<span class="pl-smi">getComputedStyle</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">document</span>.<span class="pl-c1">defaultView</span>.<span class="pl-en">getComputedStyle</span>(el, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">el</span>.<span class="pl-smi">currentStyle</span>) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">el</span>.<span class="pl-smi">currentStyle</span>;</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">el</span>.<span class="pl-c1">style</span>;</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			})(el);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">function</span> (<span class="pl-smi">prop</span>) {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">				prop <span class="pl-k">=</span> <span class="pl-smi">prop</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>-<span class="pl-c1">\D</span><span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span> (<span class="pl-smi">match</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">match</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">1</span>).<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> compCSS[prop];</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">		})(element);</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">		css <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		tmp <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>font-family<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-en">ResolveFont</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>font-family<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>times<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> FontStyleMap[<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>)] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>text-align<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> TextAlignMap[<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text-align<span class="pl-pds">&quot;</span></span>)] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">		tmp <span class="pl-k">=</span> FontWeightMap[<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>font-weight<span class="pl-pds">&quot;</span></span>)] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (tmp <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (css[<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">				css[<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> tmp;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">				css[<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> tmp <span class="pl-k">+</span> css[<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>line-height<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>line-height<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>display<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> (<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>display<span class="pl-pds">&quot;</span></span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>inline<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>inline<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">		tmp <span class="pl-k">=</span> (css[<span class="pl-s"><span class="pl-pds">&quot;</span>display<span class="pl-pds">&quot;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span>]     <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span>))     <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-bottom<span class="pl-pds">&quot;</span></span>]  <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>margin-bottom<span class="pl-pds">&quot;</span></span>))  <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>]    <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>))    <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-bottom<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>padding-bottom<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-left<span class="pl-pds">&quot;</span></span>]    <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>margin-left<span class="pl-pds">&quot;</span></span>))    <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-right<span class="pl-pds">&quot;</span></span>]   <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>margin-right<span class="pl-pds">&quot;</span></span>))   <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-left<span class="pl-pds">&quot;</span></span>]   <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>padding-left<span class="pl-pds">&quot;</span></span>))   <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-right<span class="pl-pds">&quot;</span></span>]  <span class="pl-k">=</span> tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ResolveUnitedNumber</span>(<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>padding-right<span class="pl-pds">&quot;</span></span>))  <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>page-break-before<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>page-break-before<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//float and clearing of floats</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> FloatMap[<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>cssFloat<span class="pl-pds">&quot;</span></span>)] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>clear<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> ClearMap[<span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>clear<span class="pl-pds">&quot;</span></span>)] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">		css[<span class="pl-s"><span class="pl-pds">&quot;</span>color<span class="pl-pds">&quot;</span></span>]  <span class="pl-k">=</span> <span class="pl-en">computedCSSElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>color<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> css;</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">elementHandledElsewhere</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">element</span>, <span class="pl-smi">renderer</span>, <span class="pl-smi">elementHandlers</span>) {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> handlers,</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">		i,</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">		isHandledElsewhere,</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">		l,</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">		t;</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">		isHandledElsewhere <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">		l <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">		t <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">		handlers <span class="pl-k">=</span> elementHandlers[<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">element</span>.<span class="pl-c1">id</span>];</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (handlers) {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> handlers <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">				isHandledElsewhere <span class="pl-k">=</span> <span class="pl-en">handlers</span>(element, renderer);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">				i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">				l <span class="pl-k">=</span> <span class="pl-smi">handlers</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> (<span class="pl-k">!</span>isHandledElsewhere <span class="pl-k">&amp;&amp;</span> i <span class="pl-k">!==</span> l) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">					isHandledElsewhere <span class="pl-k">=</span> handlers[i](element, renderer);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">					i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">		handlers <span class="pl-k">=</span> elementHandlers[<span class="pl-smi">element</span>.<span class="pl-c1">nodeName</span>];</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>isHandledElsewhere <span class="pl-k">&amp;&amp;</span> handlers) {</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> handlers <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">				isHandledElsewhere <span class="pl-k">=</span> <span class="pl-en">handlers</span>(element, renderer);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">				i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">				l <span class="pl-k">=</span> <span class="pl-smi">handlers</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span> (<span class="pl-k">!</span>isHandledElsewhere <span class="pl-k">&amp;&amp;</span> i <span class="pl-k">!==</span> l) {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">					isHandledElsewhere <span class="pl-k">=</span> handlers[i](element, renderer);</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">					i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> isHandledElsewhere;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">tableToJson</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">table</span>, <span class="pl-smi">renderer</span>) {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> data,</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">		headers,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">		i,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">		j,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">		rowData,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">		tableRow,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">		table_obj,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">		table_with,</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">		cell,</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">		l;</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">		data <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">		headers <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">		l <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-c1">rows</span>[<span class="pl-c1">0</span>].<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">		table_with <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">clientWidth</span>;</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> l) {</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			cell <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-c1">rows</span>[<span class="pl-c1">0</span>].<span class="pl-c1">cells</span>[i];</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">			headers[i] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">				name <span class="pl-k">:</span> <span class="pl-smi">cell</span>.<span class="pl-smi">textContent</span>.<span class="pl-c1">toLowerCase</span>().<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">				prompt <span class="pl-k">:</span> <span class="pl-smi">cell</span>.<span class="pl-smi">textContent</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\r</span><span class="pl-k">?</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">				width <span class="pl-k">:</span> (<span class="pl-smi">cell</span>.<span class="pl-smi">clientWidth</span> <span class="pl-k">/</span> table_with) <span class="pl-k">*</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">pageSize</span>.<span class="pl-c1">width</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">			i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> <span class="pl-smi">table</span>.<span class="pl-c1">rows</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">			tableRow <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-c1">rows</span>[i];</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">			rowData <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">			j <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (j <span class="pl-k">&lt;</span> <span class="pl-smi">tableRow</span>.<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">				rowData[headers[j].<span class="pl-c1">name</span>] <span class="pl-k">=</span> <span class="pl-smi">tableRow</span>.<span class="pl-c1">cells</span>[j].<span class="pl-smi">textContent</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\r</span><span class="pl-k">?</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">				j<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">data</span>.<span class="pl-c1">push</span>(rowData);</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">			i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> table_obj <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">			rows <span class="pl-k">:</span> data,</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">			headers <span class="pl-k">:</span> headers</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> SkipNode <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">		SCRIPT   <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">		STYLE    <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">		NOSCRIPT <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">		OBJECT   <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">		EMBED    <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">		SELECT   <span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> listCount <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">DrillForContent</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">element</span>, <span class="pl-smi">renderer</span>, <span class="pl-smi">elementHandlers</span>) {</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> cn,</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">		cns,</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">		fragmentCSS,</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">		i,</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">		isBlock,</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">		l,</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">		px2pt,</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">		table2json,</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">		cb;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">		cns <span class="pl-k">=</span> <span class="pl-smi">element</span>.<span class="pl-c1">childNodes</span>;</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">		cn <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">		fragmentCSS <span class="pl-k">=</span> <span class="pl-en">GetCSS</span>(element);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">		isBlock <span class="pl-k">=</span> <span class="pl-smi">fragmentCSS</span>.<span class="pl-c1">display</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (isBlock) {</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">renderer</span>.<span class="pl-en">setBlockBoundary</span>();</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">renderer</span>.<span class="pl-en">setBlockStyle</span>(fragmentCSS);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">		px2pt <span class="pl-k">=</span> <span class="pl-c1">0.264583</span> <span class="pl-k">*</span> <span class="pl-c1">72</span> <span class="pl-k">/</span> <span class="pl-c1">25.4</span>;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">		l <span class="pl-k">=</span> <span class="pl-smi">cns</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (i <span class="pl-k">&lt;</span> l) {</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">			cn <span class="pl-k">=</span> cns[i];</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> cn <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//execute all watcher functions to e.g. reset floating</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">renderer</span>.<span class="pl-en">executeWatchFunctions</span>(cn);</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/*** HEADER rendering **/</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>HEADER<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> header <span class="pl-k">=</span> cn;</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//store old top margin</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> oldMarginTop <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//subscribe for new page event and render header first on every page</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">events</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addPage<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">pageInfo</span>) {</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//set current y position to old margin</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> oldMarginTop;</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//render all child nodes of the header element</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">DrillForContent</span>(header, renderer, elementHandlers);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//set margin to old margin + rendered header + 10 space to prevent overlapping</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//important for other plugins (e.g. table) to start rendering at correct position after header</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">8</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#comment<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">~</span><span class="pl-smi">cn</span>.<span class="pl-smi">textContent</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ADD_PAGE<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">addPage</span>();</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>SkipNode[<span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span>]) {</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">/*** IMAGE RENDERING ***/</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> cached_image;</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>IMG<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-smi">cn</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">						cached_image <span class="pl-k">=</span> images[<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">sHashCode</span>(url) <span class="pl-k">||</span> url];</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (cached_image) {</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ((<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">pageSize</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">bottom</span> <span class="pl-k">&lt;</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">cn</span>.<span class="pl-c1">height</span>) <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">&gt;</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">top</span>)) {</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">addPage</span>();</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">//check if we have to set back some values due to e.g. header rendering for new page</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">renderer</span>.<span class="pl-en">executeWatchFunctions</span>(cn);</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> imagesCSS <span class="pl-k">=</span> <span class="pl-en">GetCSS</span>(cn);</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> imageX <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">x</span>;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> fontToUnitRatio <span class="pl-k">=</span> <span class="pl-c1">12</span> <span class="pl-k">/</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//define additional paddings, margins which have to be taken into account for margin calculations</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> additionalSpaceLeft <span class="pl-k">=</span> (imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-left<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-left<span class="pl-pds">&quot;</span></span>])<span class="pl-k">*</span>fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> additionalSpaceRight <span class="pl-k">=</span> (imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-right<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-right<span class="pl-pds">&quot;</span></span>])<span class="pl-k">*</span>fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> additionalSpaceTop <span class="pl-k">=</span> (imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>])<span class="pl-k">*</span>fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> additionalSpaceBottom <span class="pl-k">=</span> (imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-bottom<span class="pl-pds">&quot;</span></span>] <span class="pl-k">+</span> imagesCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-bottom<span class="pl-pds">&quot;</span></span>])<span class="pl-k">*</span>fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//if float is set to right, move the image to the right border</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//add space if margin is set</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (imagesCSS[<span class="pl-s"><span class="pl-pds">&#39;</span>float<span class="pl-pds">&#39;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> imagesCSS[<span class="pl-s"><span class="pl-pds">&#39;</span>float<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">							imageX <span class="pl-k">+=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">settings</span>.<span class="pl-c1">width</span> <span class="pl-k">-</span> <span class="pl-smi">cn</span>.<span class="pl-c1">width</span> <span class="pl-k">-</span> additionalSpaceRight;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">							imageX <span class="pl-k">+=</span>  additionalSpaceLeft;</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">addImage</span>(cached_image, imageX, <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> additionalSpaceTop, <span class="pl-smi">cn</span>.<span class="pl-c1">width</span>, <span class="pl-smi">cn</span>.<span class="pl-c1">height</span>);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">						cached_image <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//if the float prop is specified we have to float the text around the image</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (imagesCSS[<span class="pl-s"><span class="pl-pds">&#39;</span>float<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> imagesCSS[<span class="pl-s"><span class="pl-pds">&#39;</span>float<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">//add functiont to set back coordinates after image rendering</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">renderer</span>.<span class="pl-smi">watchFunctions</span>.<span class="pl-c1">push</span>((<span class="pl-k">function</span>(<span class="pl-smi">diffX</span> , <span class="pl-smi">thresholdY</span>, <span class="pl-smi">diffWidth</span>, <span class="pl-smi">el</span>) {</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">								<span class="pl-c">//undo drawing box adaptions which were set by floating</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span> (<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">&gt;=</span> thresholdY) {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">renderer</span>.<span class="pl-c1">x</span> <span class="pl-k">+=</span> diffX;</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">renderer</span>.<span class="pl-smi">settings</span>.<span class="pl-c1">width</span> <span class="pl-k">+=</span> diffWidth;</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> <span class="pl-k">if</span>(el <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">el</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>SkipNode[<span class="pl-smi">el</span>.<span class="pl-c1">nodeName</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">x</span><span class="pl-k">+</span><span class="pl-smi">el</span>.<span class="pl-c1">width</span> <span class="pl-k">&gt;</span> (<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">width</span>)) {</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">renderer</span>.<span class="pl-c1">x</span> <span class="pl-k">+=</span> diffX;</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> thresholdY;</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">renderer</span>.<span class="pl-smi">settings</span>.<span class="pl-c1">width</span> <span class="pl-k">+=</span> diffWidth;</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">							}).<span class="pl-en">bind</span>(<span class="pl-v">this</span>, (imagesCSS[<span class="pl-s"><span class="pl-pds">&#39;</span>float<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-smi">cn</span>.<span class="pl-c1">width</span><span class="pl-k">-</span>additionalSpaceLeft<span class="pl-k">-</span>additionalSpaceRight <span class="pl-k">:</span> <span class="pl-c1">0</span>, <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span><span class="pl-k">+</span><span class="pl-smi">cn</span>.<span class="pl-c1">height</span><span class="pl-k">+</span>additionalSpaceTop<span class="pl-k">+</span>additionalSpaceBottom, <span class="pl-smi">cn</span>.<span class="pl-c1">width</span>));</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">//reset floating by clear:both divs</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">//just set cursorY after the floating element</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">renderer</span>.<span class="pl-smi">watchFunctions</span>.<span class="pl-c1">push</span>((<span class="pl-k">function</span>(<span class="pl-smi">yPositionAfterFloating</span>, <span class="pl-smi">pages</span>, <span class="pl-smi">el</span>) {</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span> (<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">&lt;</span> yPositionAfterFloating <span class="pl-k">&amp;&amp;</span> pages <span class="pl-k">===</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getNumberOfPages</span>()) {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">if</span> (<span class="pl-smi">el</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">GetCSS</span>(el).<span class="pl-c1">clear</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>both<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">										<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> yPositionAfterFloating;</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">									} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">									}</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">							}).<span class="pl-en">bind</span>(<span class="pl-v">this</span>, <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span><span class="pl-k">+</span><span class="pl-smi">cn</span>.<span class="pl-c1">height</span>, <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getNumberOfPages</span>()));</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">//if floating is set we decrease the available width by the image width</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">renderer</span>.<span class="pl-smi">settings</span>.<span class="pl-c1">width</span> <span class="pl-k">-=</span> <span class="pl-smi">cn</span>.<span class="pl-c1">width</span><span class="pl-k">+</span>additionalSpaceLeft<span class="pl-k">+</span>additionalSpaceRight;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">//if left just add the image width to the X coordinate</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> (imagesCSS[<span class="pl-s"><span class="pl-pds">&#39;</span>float<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">renderer</span>.<span class="pl-c1">x</span> <span class="pl-k">+=</span> <span class="pl-smi">cn</span>.<span class="pl-c1">width</span><span class="pl-k">+</span>additionalSpaceLeft<span class="pl-k">+</span>additionalSpaceRight;</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">//if no floating is set, move the rendering cursor after the image height</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> <span class="pl-smi">cn</span>.<span class="pl-c1">height</span> <span class="pl-k">+</span> additionalSpaceTop <span class="pl-k">+</span> additionalSpaceBottom;</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">/*** TABLE RENDERING ***/</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>TABLE<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">						table2json <span class="pl-k">=</span> <span class="pl-en">tableToJson</span>(cn, renderer);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">table</span>(<span class="pl-smi">renderer</span>.<span class="pl-c1">x</span>, <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span>, <span class="pl-smi">table2json</span>.<span class="pl-c1">rows</span>, <span class="pl-smi">table2json</span>.<span class="pl-c1">headers</span>, {</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">							autoSize <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">							printHeaders <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">							margins <span class="pl-k">:</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">						});</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">lastCellPos</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">lastCellPos</span>.<span class="pl-smi">h</span> <span class="pl-k">+</span> <span class="pl-c1">20</span>;</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>OL<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>UL<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">						listCount <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">elementHandledElsewhere</span>(cn, renderer, elementHandlers)) {</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">DrillForContent</span>(cn, renderer, elementHandlers);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>LI<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> temp <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">x</span>;</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">x</span> <span class="pl-k">+=</span> <span class="pl-c1">20</span> <span class="pl-k">/</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">elementHandledElsewhere</span>(cn, renderer, elementHandlers)) {</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">DrillForContent</span>(cn, renderer, elementHandlers);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> temp;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>BR<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> fragmentCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>] <span class="pl-k">*</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-en">addText</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>2028<span class="pl-pds">&quot;</span></span>, <span class="pl-en">clone</span>(fragmentCSS));</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">elementHandledElsewhere</span>(cn, renderer, elementHandlers)) {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">DrillForContent</span>(cn, renderer, elementHandlers);</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">===</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-smi">cn</span>.<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">nodeValue</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cn</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>LI<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>OL<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">							value <span class="pl-k">=</span> listCount<span class="pl-k">++</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>. <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> value;</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> fontSize <span class="pl-k">=</span> fragmentCSS[<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">							offsetX <span class="pl-k">=</span> (<span class="pl-c1">3</span> <span class="pl-k">-</span> fontSize <span class="pl-k">*</span> <span class="pl-c1">0.75</span>) <span class="pl-k">*</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">							offsetY <span class="pl-k">=</span> fontSize <span class="pl-k">*</span> <span class="pl-c1">0.75</span> <span class="pl-k">*</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">							radius <span class="pl-k">=</span> fontSize <span class="pl-k">*</span> <span class="pl-c1">1.74</span> <span class="pl-k">/</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">cb</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">x</span>, <span class="pl-smi">y</span>) {</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">circle</span>(x <span class="pl-k">+</span> offsetX, y <span class="pl-k">+</span> offsetY, radius, <span class="pl-s"><span class="pl-pds">&#39;</span>FD<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">							};</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Only add the text if the text node is in the body element</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">cn</span>.<span class="pl-c1">ownerDocument</span>.<span class="pl-c1">body</span>.<span class="pl-en">contains</span>(cn)){</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">renderer</span>.<span class="pl-en">addText</span>(value, fragmentCSS);						</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> cn <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">renderer</span>.<span class="pl-en">addText</span>(cn, fragmentCSS);</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">			i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (isBlock) {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">renderer</span>.<span class="pl-en">setBlockBoundary</span>(cb);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">	images <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">loadImgs</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">element</span>, <span class="pl-smi">renderer</span>, <span class="pl-smi">elementHandlers</span>, <span class="pl-smi">cb</span>) {</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> imgs <span class="pl-k">=</span> <span class="pl-smi">element</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">		l <span class="pl-k">=</span> <span class="pl-smi">imgs</span>.<span class="pl-c1">length</span>, found_images,</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">		x <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">done</span>() {</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">events</span>.<span class="pl-en">publish</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>imagesLoaded<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">cb</span>(found_images);</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">loadImage</span>(<span class="pl-smi">url</span>, <span class="pl-smi">width</span>, <span class="pl-smi">height</span>) {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>url)</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> img <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Image</span>();</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">			found_images <span class="pl-k">=</span> <span class="pl-k">++</span>x;</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">img</span>.<span class="pl-smi">crossOrigin</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">img</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> <span class="pl-c1">img</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">img</span>.<span class="pl-c1">complete</span>) {</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//to support data urls in images, set width and height</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//as those values are not recognized automatically</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">img</span>.<span class="pl-smi">src</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data:image/<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">img</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> width <span class="pl-k">||</span> <span class="pl-smi">img</span>.<span class="pl-c1">width</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">img</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> height <span class="pl-k">||</span> <span class="pl-smi">img</span>.<span class="pl-c1">height</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//if valid image add to known images array</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">img</span>.<span class="pl-c1">width</span> <span class="pl-k">+</span> <span class="pl-smi">img</span>.<span class="pl-c1">height</span>) {</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> hash <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">sHashCode</span>(url) <span class="pl-k">||</span> url;</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">						images[hash] <span class="pl-k">=</span> images[hash] <span class="pl-k">||</span> img;</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-k">--</span>x) {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">done</span>();</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">img</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> url;</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (l<span class="pl-k">--</span>)</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">loadImage</span>(imgs[l].<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>),imgs[l].<span class="pl-c1">width</span>,imgs[l].<span class="pl-c1">height</span>);</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> x <span class="pl-k">||</span> <span class="pl-en">done</span>();</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">checkForFooter</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">elem</span>, <span class="pl-smi">renderer</span>, <span class="pl-smi">elementHandlers</span>) {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//check if we can found a &lt;footer&gt; element</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> footer <span class="pl-k">=</span> <span class="pl-smi">elem</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>footer<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">footer</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">			footer <span class="pl-k">=</span> footer[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//bad hack to get height of footer</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//creat dummy out and check new y after fake rendering</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> oldOut <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">write</span>;</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> oldY <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span>;</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">renderer.pdf.internal</span>.<span class="pl-en">write</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {};</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">DrillForContent</span>(footer, renderer, elementHandlers);</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> footerHeight <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">ceil</span>(<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> oldY) <span class="pl-k">+</span> <span class="pl-c1">5</span>;</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> oldY;</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">write</span> <span class="pl-k">=</span> oldOut;</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//add 20% to prevent overlapping</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">bottom</span> <span class="pl-k">+=</span> footerHeight;</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//Create function render header on every page</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-en">renderFooter</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">pageInfo</span>) {</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> pageNumber <span class="pl-k">=</span> pageInfo <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> <span class="pl-smi">pageInfo</span>.<span class="pl-smi">pageNumber</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//set current y position to old margin</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> oldPosition <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">y</span>;</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//render all child nodes of the header element</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">pageSize</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">bottom</span>;</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">bottom</span> <span class="pl-k">-=</span> footerHeight;</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//check if we have to add page numbers</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> spans <span class="pl-k">=</span> <span class="pl-smi">footer</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">spans</span>.<span class="pl-c1">length</span>; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//if we find some span element with class pageCounter, set the page</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ((<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> spans[i].<span class="pl-c1">className</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\n\t</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> pageCounter <span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">						spans[i].<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> pageNumber;</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//if we find some span element with class totalPages, set a variable which is replaced after rendering of all pages</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ((<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> spans[i].<span class="pl-c1">className</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\n\t</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> totalPages <span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">						spans[i].<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>###jsPDFVarTotalPages###<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//render footer content</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">DrillForContent</span>(footer, renderer, elementHandlers);</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//set bottom margin to previous height including the footer height</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">bottom</span> <span class="pl-k">+=</span> footerHeight;</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//important for other plugins (e.g. table) to start rendering at correct position after header</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">renderer</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> oldPosition;</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//check if footer contains totalPages which shoudl be replace at the disoposal of the document</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> spans <span class="pl-k">=</span> <span class="pl-smi">footer</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>span<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">spans</span>.<span class="pl-c1">length</span>; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ((<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> spans[i].<span class="pl-c1">className</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\n\t</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> totalPages <span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">events</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>htmlRenderingFinished<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">putTotalPages</span>.<span class="pl-en">bind</span>(<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>###jsPDFVarTotalPages###<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//register event to render footer on every new page</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">renderer</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">events</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addPage<span class="pl-pds">&#39;</span></span>, renderFooter, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//render footer on first page</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">renderFooter</span>();</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//prevent footer rendering</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">			SkipNode[<span class="pl-s"><span class="pl-pds">&#39;</span>FOOTER<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">process</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">pdf</span>, <span class="pl-smi">element</span>, <span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">settings</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>element)</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> element <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">element</span>.<span class="pl-c1">parentNode</span>)</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">			element <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">element</span>.<span class="pl-smi">innerHTML</span>;</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> element <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">			element <span class="pl-k">=</span> (<span class="pl-k">function</span> (<span class="pl-smi">element</span>) {</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> $frame,</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">				$hiddendiv,</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">				framename,</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">				visuallyhidden;</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">				framename <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>jsPDFhtmlText<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Date</span>.<span class="pl-en">now</span>().<span class="pl-c1">toString</span>() <span class="pl-k">+</span> (<span class="pl-smi">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-c1">1000</span>).<span class="pl-en">toFixed</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">				visuallyhidden <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>position: absolute !important;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>clip: rect(1px 1px 1px 1px); /* IE6, IE7 */<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>clip: rect(1px, 1px, 1px, 1px);<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>padding:0 !important;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>border:0 !important;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>height: 1px !important;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>width: 1px !important; <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>top:auto;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>left:-100px;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>overflow: hidden;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">				$hiddendiv <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">				$<span class="pl-smi">hiddendiv</span>.<span class="pl-c1">style</span>.<span class="pl-smi">cssText</span> <span class="pl-k">=</span> visuallyhidden;</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">				$<span class="pl-smi">hiddendiv</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;iframe style=<span class="pl-cce">\&quot;</span>height:1px;width:1px<span class="pl-cce">\&quot;</span> name=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> framename <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> /&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">appendChild</span>($hiddendiv);</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">				$frame <span class="pl-k">=</span> <span class="pl-smi">window</span>.<span class="pl-c1">frames</span>[framename];</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">				$<span class="pl-smi">frame</span>.<span class="pl-smi">document</span>.<span class="pl-c1">open</span>();</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">				$<span class="pl-smi">frame</span>.<span class="pl-smi">document</span>.<span class="pl-c1">writeln</span>(element);</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">				$<span class="pl-smi">frame</span>.<span class="pl-smi">document</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> $<span class="pl-smi">frame</span>.<span class="pl-smi">document</span>.<span class="pl-c1">body</span>;</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">			})(<span class="pl-smi">element</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-cce">\/</span><span class="pl-k">?</span>script<span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*?</span>&gt;<span class="pl-pds">/</span>gi</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Renderer</span>(pdf, x, y, settings), out;</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// 1. load images</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// 2. prepare optional footer elements</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// 3. render content</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">loadImgs</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>, element, r, <span class="pl-smi">settings</span>.<span class="pl-smi">elementHandlers</span>, <span class="pl-k">function</span> (<span class="pl-smi">found_images</span>) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">checkForFooter</span>( element, r, <span class="pl-smi">settings</span>.<span class="pl-smi">elementHandlers</span>);</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">DrillForContent</span>(element, r, <span class="pl-smi">settings</span>.<span class="pl-smi">elementHandlers</span>);</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//send event dispose for final taks (e.g. footer totalpage replacement)</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">r</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">events</span>.<span class="pl-en">publish</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>htmlRenderingFinished<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">			out <span class="pl-k">=</span> <span class="pl-smi">r</span>.<span class="pl-en">dispose</span>();</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) <span class="pl-en">callback</span>(out);</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (found_images) <span class="pl-en">console</span>.<span class="pl-c1">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>jsPDF Warning: rendering issues? provide a callback to fromHTML!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> out <span class="pl-k">||</span> {x<span class="pl-k">:</span> <span class="pl-smi">r</span>.<span class="pl-c1">x</span>, y<span class="pl-k">:</span><span class="pl-smi">r</span>.<span class="pl-c1">y</span>};</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">init</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">			text <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">			style <span class="pl-k">:</span> []</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>q<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">dispose</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Q<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">			x <span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-c1">x</span>,</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">			y <span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-c1">y</span>,</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">			ready<span class="pl-k">:</span><span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">//Checks if we have to execute some watcher functions</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">//e.g. to end text floating around an image</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">executeWatchFunctions</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">el</span>) {</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> ret <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> narray <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">watchFunctions</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-smi">watchFunctions</span>.<span class="pl-c1">length</span>; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">watchFunctions</span>[i](el) <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">					ret <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">narray</span>.<span class="pl-c1">push</span>(<span class="pl-smi">this</span>.<span class="pl-smi">watchFunctions</span>[i]);</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">watchFunctions</span> <span class="pl-k">=</span> narray;</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> ret;</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">splitFragmentsIntoLines</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">fragments</span>, <span class="pl-smi">styles</span>) {</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> currentLineLength,</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">		defaultFontSize,</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">		ff,</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">		fontMetrics,</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">		fontMetricsCache,</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">		fragment,</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">		fragmentChopped,</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">		fragmentLength,</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">		fragmentSpecificMetrics,</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">		fs,</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">		k,</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">		line,</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">		lines,</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">		maxLineLength,</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">		style;</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">		defaultFontSize <span class="pl-k">=</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">		k <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">		fontMetricsCache <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">		ff <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">		fs <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">		fontMetrics <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">		fragment <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">		style <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">		fragmentSpecificMetrics <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">		fragmentLength <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">		fragmentChopped <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">		line <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">		lines <span class="pl-k">=</span> [line];</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">		currentLineLength <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">		maxLineLength <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">settings</span>.<span class="pl-c1">width</span>;</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (<span class="pl-smi">fragments</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">			fragment <span class="pl-k">=</span> <span class="pl-smi">fragments</span>.<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">			style <span class="pl-k">=</span> <span class="pl-smi">styles</span>.<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (fragment) {</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">				ff <span class="pl-k">=</span> style[<span class="pl-s"><span class="pl-pds">&quot;</span>font-family<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">				fs <span class="pl-k">=</span> style[<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">				fontMetrics <span class="pl-k">=</span> fontMetricsCache[ff <span class="pl-k">+</span> fs];</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>fontMetrics) {</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">					fontMetrics <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getFont</span>(ff, fs).<span class="pl-smi">metadata</span>.<span class="pl-c1">U</span>nicode;</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">					fontMetricsCache[ff <span class="pl-k">+</span> fs] <span class="pl-k">=</span> fontMetrics;</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">				fragmentSpecificMetrics <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">					widths <span class="pl-k">:</span> <span class="pl-smi">fontMetrics</span>.<span class="pl-smi">widths</span>,</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">					kerning <span class="pl-k">:</span> <span class="pl-smi">fontMetrics</span>.<span class="pl-smi">kerning</span>,</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">					fontSize <span class="pl-k">:</span> style[<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>] <span class="pl-k">*</span> defaultFontSize,</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">					textIndent <span class="pl-k">:</span> currentLineLength</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">				fragmentLength <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">getStringUnitWidth</span>(fragment, fragmentSpecificMetrics) <span class="pl-k">*</span> <span class="pl-smi">fragmentSpecificMetrics</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">/</span> k;</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (fragment <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>2028<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">					line <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">lines</span>.<span class="pl-c1">push</span>(line);</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (currentLineLength <span class="pl-k">+</span> fragmentLength <span class="pl-k">&gt;</span> maxLineLength) {</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">					fragmentChopped <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">splitTextToSize</span>(fragment, maxLineLength, fragmentSpecificMetrics);</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">line</span>.<span class="pl-c1">push</span>([<span class="pl-smi">fragmentChopped</span>.<span class="pl-c1">shift</span>(), style]);</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">while</span> (<span class="pl-smi">fragmentChopped</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">						line <span class="pl-k">=</span> [[<span class="pl-smi">fragmentChopped</span>.<span class="pl-c1">shift</span>(), style]];</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">lines</span>.<span class="pl-c1">push</span>(line);</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">					currentLineLength <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">getStringUnitWidth</span>(line[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>], fragmentSpecificMetrics) <span class="pl-k">*</span> <span class="pl-smi">fragmentSpecificMetrics</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">/</span> k;</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">line</span>.<span class="pl-c1">push</span>([fragment, style]);</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">					currentLineLength <span class="pl-k">+=</span> fragmentLength;</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//if text alignment was set, set margin/indent of each line</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (style[<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> (style[<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>center<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> style[<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> style[<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>justify<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">lines</span>.<span class="pl-c1">length</span>; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">getStringUnitWidth</span>(lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">0</span>], fragmentSpecificMetrics) <span class="pl-k">*</span> <span class="pl-smi">fragmentSpecificMetrics</span>.<span class="pl-c1">fontSize</span> <span class="pl-k">/</span> k;</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//if there is more than on line we have to clone the style object as all lines hold a reference on this object</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">					lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-en">clone</span>(lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> space <span class="pl-k">=</span> (maxLineLength <span class="pl-k">-</span> length);</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (style[<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">					lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> space;</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//if alignment is not right, it has to be center so split the space to the left and the right</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (style[<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>center<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">					lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> space <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//if justify was set, calculate the word spacing and define in by using the css property</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (style[<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>justify<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> countSpaces <span class="pl-k">=</span> lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">0</span>].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">					lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&#39;</span>word-spacing<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> space <span class="pl-k">/</span> countSpaces;</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">//ignore the last line in justify mode</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (i <span class="pl-k">===</span> (<span class="pl-smi">lines</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>)) {</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">						lines[i][<span class="pl-c1">0</span>][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&#39;</span>word-spacing<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> lines;</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">RenderTextFragment</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">text</span>, <span class="pl-smi">style</span>) {</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> defaultFontSize,</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">		font,</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">		maxLineHeight;</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">		maxLineHeight <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">		defaultFontSize <span class="pl-k">=</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">pageSize</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">bottom</span> <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getFontSize</span>()) {</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ET<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Q<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">addPage</span>();</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">margins_doc</span>.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>q<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>BT 0 g<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getCoordinateString</span>(<span class="pl-smi">this</span>.<span class="pl-c1">x</span>), <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getVerticalCoordinateString</span>(<span class="pl-smi">this</span>.<span class="pl-c1">y</span>), <span class="pl-smi">style</span>.<span class="pl-c1">color</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Td<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//move cursor by one line on new page</span></td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">			maxLineHeight <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(maxLineHeight, style[<span class="pl-s"><span class="pl-pds">&quot;</span>line-height<span class="pl-pds">&quot;</span></span>], style[<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(<span class="pl-c1">0</span>, (<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> defaultFontSize <span class="pl-k">*</span> maxLineHeight).<span class="pl-en">toFixed</span>(<span class="pl-c1">2</span>), <span class="pl-s"><span class="pl-pds">&quot;</span>Td<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">		font <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getFont</span>(style[<span class="pl-s"><span class="pl-pds">&quot;</span>font-family<span class="pl-pds">&quot;</span></span>], style[<span class="pl-s"><span class="pl-pds">&quot;</span>font-style<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// text color</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> pdfTextColor <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">getPdfColor</span>(style[<span class="pl-s"><span class="pl-pds">&quot;</span>color<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (pdfTextColor <span class="pl-k">!==</span> <span class="pl-smi">this</span>.<span class="pl-smi">lastTextColor</span>)</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">		{	</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(pdfTextColor);	</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">lastTextColor</span> <span class="pl-k">=</span> pdfTextColor;</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//set the word spacing for e.g. justify style</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (style[<span class="pl-s"><span class="pl-pds">&#39;</span>word-spacing<span class="pl-pds">&#39;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> style[<span class="pl-s"><span class="pl-pds">&#39;</span>word-spacing<span class="pl-pds">&#39;</span></span>] <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(style[<span class="pl-s"><span class="pl-pds">&#39;</span>word-spacing<span class="pl-pds">&#39;</span></span>].<span class="pl-en">toFixed</span>(<span class="pl-c1">2</span>), <span class="pl-s"><span class="pl-pds">&quot;</span>Tw<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">font</span>.<span class="pl-c1">id</span>, (defaultFontSize <span class="pl-k">*</span> style[<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>]).<span class="pl-en">toFixed</span>(<span class="pl-c1">2</span>), <span class="pl-s"><span class="pl-pds">&quot;</span>Tf<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">pdfEscape</span>(text) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>) Tj<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//set the word spacing back to neutral =&gt; 0</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (style[<span class="pl-s"><span class="pl-pds">&#39;</span>word-spacing<span class="pl-pds">&#39;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-c1">write</span>(<span class="pl-c1">0</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Tw<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// Accepts #FFFFFF, rgb(int,int,int), or CSS Color Name</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getPdfColor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">style</span>) {</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> textColor;</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> r,g,b;</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> rx <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>rgb<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\(</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>),<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>),<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*</span>)<span class="pl-cce">\)</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> m <span class="pl-k">=</span> <span class="pl-smi">rx</span>.<span class="pl-c1">exec</span>(style);</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (m <span class="pl-k">!=</span> <span class="pl-c1">null</span>){</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">			r <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(m[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">			g <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(m[<span class="pl-c1">2</span>]);</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">			b <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(m[<span class="pl-c1">3</span>]);</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">style</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">				style <span class="pl-k">=</span> <span class="pl-smi">CssColors</span>.<span class="pl-en">colorNameToHex</span>(style);</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>style) {</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">					style <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#000000<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">			r <span class="pl-k">=</span> <span class="pl-smi">style</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>, <span class="pl-c1">3</span>);</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">			r <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(r, <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">			g <span class="pl-k">=</span> <span class="pl-smi">style</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">3</span>, <span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">			g <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(g, <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">			b <span class="pl-k">=</span> <span class="pl-smi">style</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">5</span>, <span class="pl-c1">7</span>);</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">			b <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(b, <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ((<span class="pl-k">typeof</span> r <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-c1">[<span class="pl-c1">0-9A-Fa-f</span>]</span><span class="pl-k">{6}</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(r)) {</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> hex <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">r</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">1</span>), <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">			r <span class="pl-k">=</span> (hex <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">16</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">255</span>;</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">			g <span class="pl-k">=</span> (hex <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">255</span>;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">			b <span class="pl-k">=</span> (hex <span class="pl-k">&amp;</span> <span class="pl-c1">255</span>);</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> f3 <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">f3</span>;</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ((r <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> g <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> b <span class="pl-k">===</span> <span class="pl-c1">0</span>) <span class="pl-k">||</span> (<span class="pl-k">typeof</span> g <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">			textColor <span class="pl-k">=</span> <span class="pl-en">f3</span>(r <span class="pl-k">/</span> <span class="pl-c1">255</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> g<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">			textColor <span class="pl-k">=</span> [<span class="pl-en">f3</span>(r <span class="pl-k">/</span> <span class="pl-c1">255</span>), <span class="pl-en">f3</span>(g <span class="pl-k">/</span> <span class="pl-c1">255</span>), <span class="pl-en">f3</span>(b <span class="pl-k">/</span> <span class="pl-c1">255</span>), <span class="pl-s"><span class="pl-pds">&#39;</span>rg<span class="pl-pds">&#39;</span></span>].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> textColor;</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">f3</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">number</span>) {</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">number</span>.<span class="pl-en">toFixed</span>(<span class="pl-c1">3</span>); <span class="pl-c">// Ie, %.3f</span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">renderParagraph</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">cb</span>) {</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> blockstyle,</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">		defaultFontSize,</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">		fontToUnitRatio,</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">		fragments,</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">		i,</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">		l,</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">		line,</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">		lines,</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">		maxLineHeight,</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">		out,</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">		paragraphspacing_after,</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">		paragraphspacing_before,</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">		priorblockstyle,</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">		styles,</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">		fontSize;</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">		fragments <span class="pl-k">=</span> <span class="pl-en">PurgeWhiteSpace</span>(<span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span>.<span class="pl-c1">text</span>);</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">		styles <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span>.<span class="pl-c1">style</span>;</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">		blockstyle <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span>.<span class="pl-smi">blockstyle</span>;</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">		priorblockstyle <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span>.<span class="pl-smi">priorblockstyle</span> <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">			text <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">			style <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">			blockstyle <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">			priorblockstyle <span class="pl-k">:</span> blockstyle</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">fragments</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-en">trim</span>()) {</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">		lines <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">splitFragmentsIntoLines</span>(fragments, styles);</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">		line <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">		maxLineHeight <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">		defaultFontSize <span class="pl-k">=</span> <span class="pl-c1">12</span>;</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">		fontToUnitRatio <span class="pl-k">=</span> defaultFontSize <span class="pl-k">/</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">scaleFactor</span>;</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">priorMarginBottom</span> <span class="pl-k">=</span>  <span class="pl-smi">this</span>.<span class="pl-smi">priorMarginBottom</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">		paragraphspacing_before <span class="pl-k">=</span> (<span class="pl-smi">Math</span>.<span class="pl-c1">max</span>((blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>) <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-smi">priorMarginBottom</span>, <span class="pl-c1">0</span>) <span class="pl-k">+</span> (blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>)) <span class="pl-k">*</span> fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">		paragraphspacing_after <span class="pl-k">=</span> ((blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-bottom<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>) <span class="pl-k">+</span> (blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-bottom<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>)) <span class="pl-k">*</span> fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">priorMarginBottom</span> <span class="pl-k">=</span>  blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-bottom<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (blockstyle[<span class="pl-s"><span class="pl-pds">&#39;</span>page-break-before<span class="pl-pds">&#39;</span></span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>always<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-en">addPage</span>();</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">			paragraphspacing_before <span class="pl-k">=</span> ((blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>) <span class="pl-k">+</span> (blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>padding-top<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>)) <span class="pl-k">*</span> fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">		out <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-smi">write</span>;</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">		i <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">		l <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> paragraphspacing_before;</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>q<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>BT 0 g<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getCoordinateString</span>(<span class="pl-smi">this</span>.<span class="pl-c1">x</span>), <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getVerticalCoordinateString</span>(<span class="pl-smi">this</span>.<span class="pl-c1">y</span>), <span class="pl-s"><span class="pl-pds">&quot;</span>Td<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">//stores the current indent of cursor position</span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> currentIndent <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (<span class="pl-smi">lines</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">			line <span class="pl-k">=</span> <span class="pl-smi">lines</span>.<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">			maxLineHeight <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">			i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">			l <span class="pl-k">=</span> <span class="pl-smi">line</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (i <span class="pl-k">!==</span> l) {</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (line[i][<span class="pl-c1">0</span>].<span class="pl-en">trim</span>()) {</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">					maxLineHeight <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(maxLineHeight, line[i][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>line-height<span class="pl-pds">&quot;</span></span>], line[i][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">					fontSize <span class="pl-k">=</span> line[i][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>font-size<span class="pl-pds">&quot;</span></span>] <span class="pl-k">*</span> <span class="pl-c1">7</span>;</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">				i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//if we have to move the cursor to adapt the indent</span></td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indentMove <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indentMore <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//if a margin was added (by e.g. a text-alignment), move the cursor</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (line[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>margin-left<span class="pl-pds">&quot;</span></span>] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> line[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>margin-left<span class="pl-pds">&quot;</span></span>] <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">				wantedIndent <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getCoordinateString</span>(line[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>margin-left<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">				indentMove <span class="pl-k">=</span> wantedIndent <span class="pl-k">-</span> currentIndent;</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">				currentIndent <span class="pl-k">=</span> wantedIndent;</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indentMore <span class="pl-k">=</span> (<span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(blockstyle[<span class="pl-s"><span class="pl-pds">&quot;</span>margin-left<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-c1">0</span>, <span class="pl-c1">0</span>)) <span class="pl-k">*</span> fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//move the cursor</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">out</span>(indentMove <span class="pl-k">+</span> indentMore, (<span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> defaultFontSize <span class="pl-k">*</span> maxLineHeight).<span class="pl-en">toFixed</span>(<span class="pl-c1">2</span>), <span class="pl-s"><span class="pl-pds">&quot;</span>Td<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">			i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">			l <span class="pl-k">=</span> <span class="pl-smi">line</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (i <span class="pl-k">!==</span> l) {</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (line[i][<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">RenderTextFragment</span>(line[i][<span class="pl-c1">0</span>], line[i][<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">				i<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> maxLineHeight <span class="pl-k">*</span> fontToUnitRatio;</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//if some watcher function was executed sucessful, so e.g. margin and widths were changed,</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//reset line drawing and calculate position and lines again</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">//e.g. to stop text floating around an image</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-en">executeWatchFunctions</span>(line[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>]) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">lines</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> localFragments <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> localStyles <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//create fragement array of</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">lines</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">localLine</span>) {</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> l <span class="pl-k">=</span> <span class="pl-smi">localLine</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">while</span> (i <span class="pl-k">!==</span> l) {</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (localLine[i][<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">localFragments</span>.<span class="pl-c1">push</span>(localLine[i][<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">localStyles</span>.<span class="pl-c1">push</span>(localLine[i][<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">++</span>i;</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//split lines again due to possible coordinate changes</span></td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">				lines <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">splitFragmentsIntoLines</span>(<span class="pl-en">PurgeWhiteSpace</span>(localFragments), localStyles);</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">//reposition the current cursor</span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ET<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Q<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>q<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>BT 0 g<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getCoordinateString</span>(<span class="pl-smi">this</span>.<span class="pl-c1">x</span>), <span class="pl-smi">this</span>.<span class="pl-smi">pdf</span>.<span class="pl-smi">internal</span>.<span class="pl-en">getVerticalCoordinateString</span>(<span class="pl-smi">this</span>.<span class="pl-c1">y</span>), <span class="pl-s"><span class="pl-pds">&quot;</span>Td<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (cb <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> cb <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">cb</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>, <span class="pl-smi">this</span>.<span class="pl-c1">x</span> <span class="pl-k">-</span> <span class="pl-c1">9</span>, <span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">-</span> fontSize <span class="pl-k">/</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">out</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ET<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Q<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">y</span> <span class="pl-k">+=</span> paragraphspacing_after;</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setBlockBoundary</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">cb</span>) {</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-en">renderParagraph</span>(cb);</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setBlockStyle</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">css</span>) {</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span>.<span class="pl-smi">blockstyle</span> <span class="pl-k">=</span> css;</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Renderer</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">addText</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">text</span>, <span class="pl-smi">css</span>) {</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span>.<span class="pl-c1">text</span>.<span class="pl-c1">push</span>(text);</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">paragraph</span>.<span class="pl-c1">style</span>.<span class="pl-c1">push</span>(css);</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">	FontNameDB <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">		helvetica         <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>helvetica<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>sans-serif<span class="pl-pds">&quot;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>helvetica<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>times new roman<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>times<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">		serif             <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>times<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">		times             <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>times<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">		monospace         <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>courier<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">		courier           <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>courier<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">	FontWeightMap <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">100</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">200</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">300</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">400</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">500</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">600</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">700</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">800</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">900</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">		normal  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">		bold    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">		bolder  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">		lighter <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">	FontStyleMap <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">		normal  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">		italic  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>italic<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">		oblique <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>italic<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">	TextAlignMap <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">		left    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">		right   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>right<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">		center  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>center<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">		justify <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>justify<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">	FloatMap <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">		none <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">		right<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">		left<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">	ClearMap <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">	  none <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">	  both <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>both<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">	UnitedNumberMap <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">		normal <span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Converts HTML-formatted text into formatted PDF text.</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 *</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Notes:</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * 2012-07-18</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Plugin relies on having browser, DOM around. The HTML is pushed into dom and traversed.</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Plugin relies on jQuery for CSS extraction.</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Targeting HTML output from Markdown templating, which is a very simple</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * markup - div, span, em, strong, p. No br-based paragraph separation supported explicitly (but still may work.)</span></td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Images, tables are NOT supported.</span></td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 *</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * @public</span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@function</span></span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> HTML {String or DOM Element} HTML-formatted text, or pointer to DOM element that is to be rendered into PDF.</span></td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> x {Number} starting X coordinate in jsPDF instance&#39;s declared units.</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> y {Number} starting Y coordinate in jsPDF instance&#39;s declared units.</span></td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> settings {Object} Additional / optional variables controlling parsing, rendering.</span></td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@returns</span> {Object} jsPDF instance</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 */</span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">jsPDFAPI</span>.<span class="pl-en">fromHTML</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">HTML</span>, <span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">settings</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">margins</span>) {</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">this</span>.<span class="pl-smi">margins_doc</span> <span class="pl-k">=</span> margins <span class="pl-k">||</span> {</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">			top <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">			bottom <span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>settings)</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">			settings <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">elementHandlers</span>)</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">settings</span>.<span class="pl-smi">elementHandlers</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">process</span>(<span class="pl-v">this</span>, <span class="pl-c1">HTML</span>, <span class="pl-c1">isNaN</span>(x) <span class="pl-k">?</span> <span class="pl-c1">4</span> <span class="pl-k">:</span> x, <span class="pl-c1">isNaN</span>(y) <span class="pl-k">?</span> <span class="pl-c1">4</span> <span class="pl-k">:</span> y, settings, callback);</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">})(<span class="pl-smi">jsPDF</span>.<span class="pl-c1">API</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07234s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-ykGDzhEqjomEJwRp4xb0cAu+RaCOFUXTWaLfm6GKhbY=" src="https://assets-cdn.github.com/assets/frameworks-ca4183ce112a8e8984270469e316f4700bbe45a08e1545d359a2df9ba18a85b6.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-B0E7XgFHQ0/jn3+WVF7zWe9FylBRpE7DuOjUEKSkeYg=" src="https://assets-cdn.github.com/assets/github-07413b5e0147434fe39f7f96545ef359ef45ca5051a44ec3b8e8d410a4a47988.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

