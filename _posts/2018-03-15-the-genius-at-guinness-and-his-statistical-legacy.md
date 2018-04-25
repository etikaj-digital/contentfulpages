---
authors:
- 1gsy8aV8eC4GgCKm2yWemM
- 25RKqa0G5SCuMw2K8qAI2O
category: technology
datePublished: '2018-03-15T19:08:24Z'
disclosureStatement: The authors do not work for, consult, own shares in or receive
  funding from any company or organisation that would benefit from this article, and
  have disclosed no relevant affiliations beyond their academic appointment.
featureImage: 40n13c3880MmQQGSsWui2S
guid: http://theconversation.com/the-genius-at-guinness-and-his-statistical-legacy-93134
id: QqyqP87zGusiSEiq2G4yK
lead: A statistical method widely used today by scientists and others is all thanks
  to a statistician at a Guinness brewery whose work was published anonymously more
  than a century ago.
slug: the-genius-at-guinness-and-his-statistical-legacy
tags:
- brewing
- mathematics
- statistics
title: The genius at Guinness and his statistical legacy
---
This St Patrick’s Day, revellers around the world will crowd the streets seeking one of Ireland’s national drinks: a pint of Guinness. But besides this tasty stout, one of the most fundamental and commonly used tools of science also has its origins at the Guinness brewery.

Towards the end of the 19th century, Guinness was scaling up its operations, and was interested in applying a scientific approach to all aspects of Guinness production: from barley growth right through to the Guinness taste. 

Before adopting a scientific approach, brewers at Guinness relied on subjective methods, such as the appearance and scent of hops, to assess produce quality. 


## Science in the brew

Once scientific brewers were recruited, a more objective approach was taken. The first scientific brewer, [Thomas Bennett Case](http://pubs.rsc.org/en/Content/ArticleLanding/1942/JR/JR9420000333), was hired in 1893 and he believed that the [amount of soft resins in hops was related to the quality of Guinness](https://doi.org/10.1257/jep.22.4.199). He was therefore keen to estimate the amount of soft resin in particular crops of hops. 

The challenge facing Case was that he, like any scientist, could not measure everything at once. It was not possible for him to assess the amount of soft resin in every single one of the countless hop flowers (added by the thousands to enormous vats of soon-to-be Guinness) in his charge.

Instead, he took a sample of hops (11 measurements of 50 grams each) and calculated the average soft resin content. His hope was that the average soft resin content of his small sample could be used to estimate the soft resin content of the entire crop (what statisticians would call “the population”) of hops.

For comparison, a colleague took a further 14 measurements of 50 grams each from the same lot of hops. Case found a small difference in the average amount of soft resins between these samples. 

He was stumped. Were these differences in hop content due to real differences across the whole hop crop, or were they due to random error introduced by using small sample sizes? 

## Size matters

At the time, statistics relied on what is called “[large-sample theory](https://www.tandfonline.com/doi/abs/10.1080/00031305.1984.10483195)”, which unsurprisingly requires large samples (150 or more) to work. Applying it to problems involving small samples (like those faced by Case at Guinness) was difficult.

[](https://images.theconversation.com/files/210447/original/file-20180315-113472-pceuzb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip) William Sealy Gosset. [Wikimedia](https://commons.wikimedia.org/wiki/File:William_Sealy_Gosset.jpg)

This was the problem that [William Sealy Gosset](https://www.encyclopediaofmath.org/index.php/Gosset,_William_Sealy), a recent graduate of chemistry and mathematics at Oxford University, was keen to address. Gosset began work as an apprentice brewer at the Guinness factory in Dublin in 1899.

In 1906, Gosset, now a self-taught statistician, went to study with [Karl Pearson](https://www.encyclopediaofmath.org/index.php/Pearson,_Karl), a leading figure in statistics, at University College London. 

Gosset was keen to adapt Pearson’s large-sample methods to deal with the small samples they used at Guinness. There, he developed his ideas and readied them for publication.

However, until the late 1930s, Guinness would not allow employees to publish under their own names for fear that other brewers would learn of their scientific approaches to beer. As a result, Gosset published his most important paper, [The Probable Error of a Mean](https://doi.org/10.1093/biomet/6.1.1), under the pseudonym “Student” in the journal Biometrika in 1908.

[](https://images.theconversation.com/files/210045/original/file-20180313-30958-1d1lew2.png?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip) The ultimate ‘Student’ author’s journal paper. [Biometrika (screen grab)](https://doi.org/10.1093/biomet/6.1.1)

This was the origin of [Student’s t-test](https://www.britannica.com/science/Students-t-test), a fundamental statistical method that is widely used to this day.

## Student’s t-test

The problem that Case faced was that using small samples of hops introduces a new source of uncertainty into the analysis, leaving him less able to distinguish between real, true differences between two batches of hops and differences due to this uncertainty. 

Gosset’s genius was to devise a way of accounting for this: the t-distribution. This mathematically defines the relationship between the size of sample and the amount of uncertainty this imposes.

Basically, when carrying out experiments, the t-distribution (and the famous t-test that depends upon it) allows beer brewers and scientists alike to account for the size of the sample they have used in their work, and then define just how confident they are in their findings. 

Sticking with the brewers’ case, you would have information from the two samples, such as the average soft resin content of the hops and the spread of each measurement around the average of each sample. 

Without going into too much detail, the t-test helps to determine whether there is evidence of a difference between the two averages based on the sample size (that is, the number of measurements taken from a particular hop crop). In the brewers’ case they were looking for zero difference between their two samples. 

## A lasting legacy

Gosset’s method did not draw the attention of the statistical community until another leading statistical figure, [Ronald Aylmer Fisher](https://www.encyclopediaofmath.org/index.php/Fisher,_Ronald_Aylmer), enthusiastically [embraced the method and provided a mathematical proof](https://doi.org/10.1542/peds.2005-1134). 

Since that time, the t-test has been used to tackle a huge range of scientific problems, from the [assessment of brain function in stroke patients ](https://www.ncbi.nlm.nih.gov/pubmed/8841325), to [the measurement of carbon and nitrogen content in coastal ocean-dwelling bacteria](http://aem.asm.org/content/64/9/3352), to [how the behaviour of coal miners may or may not lead to accidents](https://www.sciencedirect.com/science/article/pii/S0925753506000737) (the consumption of Guinness by these miners was, perhaps unsurprisingly, not a focus of the study).

In fact, Student’s t-test has been employed in essentially every field of scientific endeavour: biology, physics, psychology, biometrics, economics and medicine. 


It is a staple of undergraduate statistics taught across these disciplines, but few may be aware of Gosset’s role in creating the t-test and his beery reasons for doing so.

Gosset remained at Guinness throughout his life as Head Experimental Brewer, then Head of the Statistics Department he formed at Guinness, before his promotion to Head Brewer for the new Guinness brewery in London in 1935. He published several papers as “Student” but his true identity was only publicly revealed upon his death in 1937.

So, if you’re drinking a Guinness this St Patrick’s day, raise a glass to the little-known character who played a pivotal role in beer, statistics and indeed, modern science: William Sealy Gosset.