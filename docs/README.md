---
lang: en-US
title: ShinyLink Website
description: RShiny based record linkage tool
home: true
heroImage: /images/hero.png
actionText: Get started with ShinyLink
actionLink: 
actions:
  - text: Get Started
    link: /guide/get-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
- title: Easy-To-Use
  details: Web-based accessibility to a free and easy to use method of record linkage, with an intuitive graphical interface for an optimized user experience.
- title: Open-source
  details: ShinyLink is an open-source software compiled with a GPL-3 license and built using software packages such as R, Shiny, shinyWidgets, shinydashboard.
- title: Algorithms
  details: Access to high-performance record linkage methods for public health professionals (now supporting fastLink, with further packaging under development).
- title: De-duplicate
  details: Built-in functionality geared to delete duplicated records in given columns from sample and matching data sets.
- title: Handling missing values
  details: Features included in software that allow for the imputation of missing gender, using birth name data from the U.S. SSA and U.S. census to accurately predict gender values in given datasets.
- title: Build the bridge
  details: ShinyLink serves as a bridge between current record linkage algorithms and the health professionals they serve, providing a much-needed accessibility through a platform that removes costs and technical restrictions.
footer: © Nelson Scientific Labs, LLC.  | Designed by Nelson Scientific Labs, LLC.
---
## Hello ShinyLink

ShinyLink is out :tada: !!

>ShinyLink is the bridge between existing vigorous open-source record linkage algorithms and an urgently needed accessible platform that eliminates cost and programming barriers and delivers a public health and bioinformatics precedent toward increased data interchangeability.

### Current Version

ShinyLink is currently in alpha testing (updated 29 November 2022)

### Installation of ShinyLink, as Easy as 1, 2, 3

<CodeGroup>
  <CodeGroupItem title="Installation" active>

```r
## Install from CRAN code
install.packages("shinylink")

## start using
library(shinylink)

## Install from source code
if(!require(devtools)) install.packages("devtools")

library(devtools)

install_github("nelson-sci-labs/shinylink",dependencies=TRUE)

## start using
library(shinylink)
```

  </CodeGroupItem>
</CodeGroup>
