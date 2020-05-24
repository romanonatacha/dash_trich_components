% Auto-generated: do not edit by hand
\name{card}

\alias{card}

\title{Card component}

\description{
A simple card with an image, title, description, badges and link for github with icon, all this arguments are optional.
}

\usage{
card(id=NULL, className=NULL, style=NULL, link=NULL, image=NULL,
title=NULL, description=NULL, badges=NULL, git=NULL,
dark=NULL)
}

\arguments{
\item{id}{Character. Id of the element}

\item{className}{Character. Style class of the component.}

\item{style}{Named list. Inline style of the component.}

\item{link}{Character. link to redirect when the user clicks on the image}

\item{image}{Character. image that will display on card}

\item{title}{Character. title of the card}

\item{description}{Character. description of the card}

\item{badges}{Unnamed list. list of strings to display in badges, to work porperly put up to 4 or 5}

\item{git}{Character. github URL, is not required, only if you want to}

\item{dark}{Logical. theme color of the card, that for default is light}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

