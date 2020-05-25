// Bioinformatics.js

// packages
import React from 'react';
import Collapsible from 'react-collapsible';
import { Carousel } from 'react-responsive-carousel';

// css
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Images
import m1 from '../assets/modCluster/a.jpg'
import m2 from '../assets/modCluster/b.png'
import m3 from '../assets/modCluster/c.png'



function Bioinformatics() {
    return (
        <div >
            <Collapsible trigger="Bioinformatics" triggerOpenedClassName="mainCol" triggerClassName="mainCol" >
                <p className="description">
                    Very broadly, bioinformatics is <em>using
                    concepts in computer science to analyze biological data</em>.
                    The projects below largely use computational tools such as graph theory, web development, databases, bash, remote computing,
                    and web-scraping to analyze genomic and transcriptomic data.
                </p>
                <p className="description">
                    My undergraduate degree was a specialist in Bioinformatics, so most of my academic work thus far is in the field of bioinformatics.
                    My skills focused on information aggregation and visualization as well as high performance computing.
                </p>
                <Collapsible trigger="Visualizing GRNs for Web Database" triggerOpenedClassName="subCol" triggerClassName="subCol" >
                    <div className="margins-inner">
                        <h3 className="subheading"> <a href="http://labs.csb.utoronto.ca/provart/" rel="noopener noreferrer" target="_blank" >The Provart Lab</a>  </h3>
                        <h3 className="date"> May 2019-Present </h3>
                        <p className="description-inner">
                            aGENT is a tool I helped develop as part of the BAR database, a bioanalytic
                            resource for plant biology. The goal of aGENT is to which curate and visualize gene regulatory networks.
                            Gene regulatory networks can be visualized as graphs where the nodes are genes and edges are interactions.
                    </p>
                        <p className="description-inner">
                            This app is written in <b>ReactJS</b> with a <b>mysql</b> database forming the backend.
                    Much of the visualization for the app comes from Cytoscape JS, a library for interactive network visualization.
                    </p>
                        <p className="description-inner">
                            Features I worked on include the following:
                    </p>
                        <ul className="description-inner">
                            <li>Wrote scripts to populate mysql databases</li>
                            <li>Calculated and displayed degree centrality to determine genes with high information transmission</li>
                            <li>Implemented download and upload functionality </li>
                            <li>Displayed shortest paths between 2 genes of interest </li>
                            <li>Used APIs to visualize and provide cutoffs for regulatory motifs</li>
                            <li>Implemented various graph layouts</li>
                            <li>Designed elements of user interface</li>
                            <li>Used webscraping techniques to validate gene information</li>
                            <li>Manually curated gene regulatory networks</li>
                        </ul>
                        <p className="description-inner">
                            For more of the biological background please download my final report below.
                    </p>
                        <div className="button-container">
                            <a rel="noopener noreferrer" target="_blank" href="https://bar.utoronto.ca/eplant/">
                                <button className="inner-button"> ePlant </button>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/raywoo32/readSIF">
                                <button className="inner-button"> Scripting example </button>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/raywoo32/resumeSupportFiles/blob/master/visualizingGRNs.pdf">
                                <button className="inner-button"> Report Download </button>
                            </a>

                        </div>
                    </div>
                </Collapsible>
                <Collapsible trigger="Linking cis-regulation and co-expression" triggerOpenedClassName="subCol" triggerClassName="subCol" >
                    <div className="margins-inner">
                        <h3 className="subheading"> <a href="https://cutter.eeb.utoronto.ca/" rel="noopener noreferrer" target="_blank" >The Cutter Lab</a>  </h3>
                        <h3 className="date"> 2018-2019 academic year </h3>
                        <p className="description-inner">
                            For my third year research project I used motif finding algorithms to examine short sequences of
                            DNA in upstream non-coding regions. These areas and motifs are significant as they could
                            represent transcription factor binding sites, which are known to be important in gene expression. For
                            more information please see my full write-up that can be downloaded below.
                    </p>

                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/raywoo32/resumeSupportFiles/blob/master/linkingCisRegulationAndCoexpression.pdf">
                            <button className="inner-button"> Download Report </button>
                        </a>

                    </div>
                </Collapsible>
                <Collapsible trigger="Clustering by Module" triggerOpenedClassName="subCol" triggerClassName="subCol" >
                    <div className="margins-inner">
                        <h3 className="subheading"> Applied Bioinformatics  </h3>
                        <h3 className="date"> Sept 2019-Present </h3>
                        <p className="description-inner">
                            ModCluster is an R package I wrote which helps identify and visualize related modules within biological data.
                            ModCluster operates upon biological interaction networks (undirected graphs where the genes are nodes and interactions are edges).
                            The algorithm groups mutually exclusive verticies modules which could represent anything from co-expression to subcellular location. The
                            grouping is based upon increases in weighted edge density between and within modules.
                            The goal of this project is to enhance data exploration between different types of biological data.
                    </p>
                        <p className="description-inner">
                            ModCluster comes with vignettes and a RShiny app, which allows the user to interactively see
                            example data and outputs from their localhost.
                    </p>
                        <img src={m1} alt="modCluster" className="innerImg" />
                        <div className="button-container">
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/raywoo32/modCluster">
                                <button className="inner-button"> GitHub Repo </button>
                            </a>
                        </div>
                    </div>
                </Collapsible>
                <Collapsible trigger="Transcriptome assembly" triggerOpenedClassName="subCol" triggerClassName="subCol" >
                    <div className="margins-inner">
                        <h3 className="subheading"> <a href="http://labs.csb.utoronto.ca/provart/" rel="noopener noreferrer" target="_blank" >The Provart Lab</a>  </h3>
                        <h3 className="date"> May 2019-Present </h3>
                        <p className="description-inner">
                            For this project, I am performing de-novo assembly on RNA-seq data for wild-type wheat.
                            In this role, I applied my skills in remote computing, linux systems, and bash scripting to assemble the transcriptome.
                            I am following a well-established protocol which includes adaptor trimming with &nbsp;
                    <a href="http://www.usadellab.org/cms/?page=trimmomatic" rel="noopener noreferrer" target="_blank" >Trimmomatic</a>, assembly and normalization with &nbsp;
                    <a href="https://github.com/trinityrnaseq/trinityrnaseq" rel="noopener noreferrer" target="_blank" >Trinity</a>,
                    and in future SNP calling with &nbsp;
                    <a href="https://software.broadinstitute.org/gatk/" rel="noopener noreferrer" target="_blank" >GATK</a>.
                    I also completed a certificate in high-throughput computing with  &nbsp;
                    <a href="https://www.scinethpc.ca/" rel="noopener noreferrer" target="_blank" >Scinet</a> &nbsp;
                    in order to learn best practices in my field.
                    </p>
                    </div>
                </Collapsible>
            </Collapsible>
        </div>
    );
}

export default Bioinformatics;

// TODO make component for art, crop so they are all the same dimensions 

// citations: 
/*
https://craftcode.design/contact-form-with-react-and-php
*/

/*
     <div className="button-container">
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/raywoo32/modCluster">
                            <button className="inner-button"> TODO: DOWNLOAD REPORT </button>
                        </a>
                        </div>

                                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/raywoo32/readSIF">
                             <button className="inner-button">TODO:: DOWNLOAD PROPOSAL </button>
                        </a>
*/