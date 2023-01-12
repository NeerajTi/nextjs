import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
   <div style={{marginTop:-50+'px'}} className="moto-widget moto-widget-block moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto" data-widget="block" data-spacing="lala"  data-bg-position="left top">
				<a className="moto-anchor" name="about"></a>
				<div className="container-fluid">
					<div className="row">
						<div className="moto-cell col-sm-12" data-container="container">
							<div className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-grid-type="sm" data-widget="row" data-spacing="aaaa"  data-bg-position="left top">
								<div className="container-fluid">
									<div className="row" data-container="container">
										<div className="moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
											<div className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aaaa" data-animation="">
												<div className="moto-widget-text-content moto-widget-text-editable">
													<h2 className="moto-text_system_6">Innovate Sustainably</h2></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-grid-type="sm" data-widget="row" data-spacing="aaaa"  data-bg-position="left top">
								<div className="container-fluid">
									<div className="row" data-container="container">
                                    <div className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
											<div className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="maaa" data-animation="">
												<div className="moto-widget-text-content moto-widget-text-editable">
													<h3 className="moto-text_system_13">The SPI Mission is to provide community-based resources, education, and funding that empowers small businesses to create economic growth while promoting the distribution of clean energy technologies that have a direct local and long-term impact on our sustainable global future.</h3>
													<p className="moto-text_system_13">&nbsp;</p>
													<p className="moto-text_system_13">One village at a time is our philosophy.  Through our global network of partners SPI works with businesses and governments in underdeveloped regions around the globe that want to invest, learn and deploy renewable technology opportunities within their community.  SPI manages each project from funding, implementation, through to success.</p>
                                                    <p className="moto-text_system_13">&nbsp;</p>
													<p className="moto-text_system_13">A partnership and investment in SPI fuels local economic opportunities and creates tens of thousands of long-term jobs in undeveloped communities around the world. Our combined end goal is thousands of long term successful clean energy business partners that make a powerful impact in our global sustainable future.</p>
												</div>
											</div>
										</div>
									
                                        <div className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
											<img src='images/mission.png' width="99%" />
										</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </Layout>
  )
}