import Link from 'next/link';
import Image from 'next/image'
export default function Layout({ children }) {
    return 	(
    <div className="moto-background moto-website_live">
        <div className="page">
    <section id="section-content" className="content page-1 moto-section" data-widget="section" data-container="section">
        <div className="moto-widget moto-widget-block moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="block" data-spacing="aaaa"  data-bg-position="left top">
            <div className="container-fluid">
                <div className="row">
                    <div className="moto-cell col-sm-12" data-container="container">
                    
                    <div className="moto-widget moto-widget-container moto-container_content_5b320b571" data-widget="container" data-container="container" data-css-name="moto-container_content_5b320b571" data-bg-position="left top" data-moto-sticky="{ }">
                            <div className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-grid-type="sm" data-widget="row" data-spacing="aaaa"  data-bg-position="left top">
                                <div className="container-fluid" style={{maxWidth: '92%'}}>
                                    <div className="row" data-container="container">
                                        <div className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
                                            <div className="moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-grid-type="xs" data-widget="row" data-spacing="sasa"  data-bg-position="left top">
                                                <div className="container-fluid">
                                                    <div className="row" data-container="container">
                                                    
                                                        <Link href="/" data-action="page" className="moto-widget-image-link moto-link"> 
                                                        <Image
      
      src="images/logo.png"
      alt="Logo"
      className="moto-widget-image-picture moto-widget-deferred-content lazyload"
      width={231}
      height={90}
    />
     </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="moto-widget moto-widget-row__column moto-cell col-sm-8 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
                                            <div data-widget-id="wid_1530006544_ab1s2hap5" className="moto-widget moto-widget-menu moto-preset-default moto-align-right moto-align-center_mobile-h moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-preset="default" data-widget="menu"> <a href="#" className="moto-widget-menu-toggle-btn"><i className="moto-widget-menu-toggle-btn-icon fa fa-bars"></i></a>
                                                <ul className="moto-widget-menu-list moto-widget-menu-list_horizontal" >
                                                <li className="moto-widget-menu-item" style={{marginLeft: 27 + 'px'}} > <Link href="/mission" data-action="page" style={{color:'white',borderBottom: '2px solid white'}} className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-widget-menu-link-active moto-link">Our Mission</Link> </li>
                                                    <li className="moto-widget-menu-item" style={{marginLeft: 27 + 'px'}}> <Link href="/product" data-action="page" style={{color:'white'}} className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-widget-menu-link-active moto-link">Get Involved</Link>  </li>
                                                    <li className="moto-widget-menu-item" style={{marginLeft: 27 + 'px'}}> <Link href="/posts/first-post/" data-action="page" style={{color:'white'}} className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-widget-menu-link-active moto-link">Test</Link> </li>
                                                    <li className="moto-widget-menu-item" style={{marginLeft: 27 + 'px'}}> <Link href="/investor" data-action="page"  style={{color:'white'}}  className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-widget-menu-link-active moto-link">Investors</Link> </li>
                                                    <li className="moto-widget-menu-item" style={{marginLeft: 27 + 'px'}}> <Link href="/donate" data-action="page"  style={{color:"white",backgroundColor:"#A3826C",padding:'7px 18px 7px 18px',borderRadius: 10+'px'}}  className="moto-widget-menu-link moto-widget-menu-link-level-1 moto-widget-menu-link-active moto-link">DONATE</Link> </li>

                                
                                                </ul>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
       
        {children}
        <div className="moto-widget moto-widget-block moto-bg-color_custom1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="block" data-spacing="aaaa"  data-bg-position="left top">
				<div className="container-fluid">
					<div className="row">
						<div className="moto-cell col-sm-12" data-container="container">
							<div data-widget-id="wid_1530014993_l3v85lht1" className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto " data-widget="spacer" data-preset="default" data-spacing="saaa" data-visible-on="mobile-v">
								<div className="moto-widget-spacer-block" style={{height:15+'px'}}></div>
							</div>
							<div className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-grid-type="sm" data-widget="row" data-spacing="aaaa"  data-bg-position="left top">
								<div className="container-fluid">
									<div className="row" data-container="container">
										<div className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
											<div className="moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-grid-type="xs" data-widget="row" data-spacing="sasa"  data-bg-position="left top">
                                            
												<div style={{textAlign:'left'}} id="wid_1530014924_sn1e67g5m" data-widget-id="wid_1530014924_sn1e67g5m" className="moto-widget moto-widget-social-links-extended moto-preset-2 moto-align-center moto-align-center_mobile-h moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  " data-widget="social_links_extended" data-preset="2">
                                                <div className="moto-widget-text-content moto-widget-text-editable">
                                                    <h3 className="moto-text_system_8" style={{color:'black',fontSize:'22px'}}>Sparrow Foundation Institute</h3>
                                                    <p className="moto-text_normal">&nbsp;</p>
                                                    <p className="moto-text_normal" style={{color:'#9B2626',lineHeight:40+'px'}}>2220 County Road 210 West</p><br/>
                                                    <p className="moto-text_normal" style={{color:'#9B2626',lineHeight:40+'px'}}>Suite 108, PmB 345</p><br/>
                                                    <p className="moto-text_normal" style={{color:'#9B2626',lineHeight:40+'px'}}>Jacksonville, FL 32259</p>
                                                </div>
											
												<style type="text/css">

												</style>
											</div>										
                                              
											</div>
										</div>
										<div className="moto-widget moto-widget-row__column moto-cell col-sm-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
									<h3 className="moto-text_system_8" style={{color:'black',marginLeft:'60%'}}>About</h3><br/>
												<div className="container-fluid" style={{color:'white',marginLeft:'60%',color:'#A3826C'}}>
													
												<a href="mission.php" style={{color:'#A3826C',fontSize:'20px'}}><u>Our Mission</u></a><br/>
                                                        <a href="donate.php" style={{color:'#A3826C',fontSize:20+'px',marginTop:60+'px'}}><u>Donate</u></a><br/>
														
														
														<br/><br/>
													
												</div>
											
										</div>
										<div className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"  data-widget="row.column" data-container="container" data-spacing="aaaa" data-bg-position="left top">
										<h3 className="moto-text_system_8" style={{color:'black',marginLeft:'0%'}}>Projects</h3><br/>
												<div className="container-fluid" style={{color:'white',marginLeft:'0%',color:'#A3826C'}}>
													
												<a href="#;" style={{color:'#A3826C',fontSize:'20px'}}><u>Our Affiliates</u></a><br/>
                                                <a href="#;" style={{color:'#A3826C',fontSize:20+'px',marginTop:60+'px'}}><u>Education for All</u></a><br/>
												<a href="#;" style={{color:'#A3826C',fontSize:20+'px',marginTop:60+'px'}}><u>Support for Communities</u></a><br/>
												
														

													
												</div>
										</div>
									</div>
								</div>
							</div>
							<div data-widget-id="wid_1530015005_2qlcz82xw" className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto " data-widget="spacer" data-preset="default" data-spacing="saaa" data-visible-on="mobile-v">
								<div className="moto-widget-spacer-block" style={{height:15+'px'}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div data-moto-back-to-top-button className="moto-back-to-top-button">
		<a ng-click="toTop($event)" className="moto-back-to-top-button-link"> <span className="moto-back-to-top-button-icon fa"></span> </a>
	</div>
	<div data-moto-widget-callback className="moto-widget-callback moto-widget-callback_closed moto-preset-default">
		<div className="moto-widget-callback__wrapper">
			
			<div className="moto-widget-callback__body moto-widget-callback__body_more-details-enabled" style={{display: 'none'}}>
				<div className="moto-widget-callback__agent moto-widget-callback__thumbnail-wrapper moto-widget-callback__thumbnail-wrapper_image">
					<div className="moto-widget-callback__thumbnail moto-widget-callback__thumbnail_image" style={{backgroundImage: 'url(mt-demo/67900/67967/mt-content/uploads/2018/06/mt-1509-home-team4.jpg)'}}></div>
				</div>
				<div className="moto-widget-callback__description moto-widget-text">
					<p className="moto-text_system_8" style={{textAlign: 'center'}}>John Smith</p>
					<p className="moto-text_normal" style={{textAlign: 'center'}}>agent</p>
					<p className="moto-text_system_13" style={{textAlign: 'center'}}><a className="moto-link" data-action="call" href="tel:+112233445566"><span className="fa"></span> +112233445566</a></p>
				</div>
				<div className="moto-widget-callback__more-details-wrapper">
					<hr className="moto-widget-callback__more-details-divider" />
					<div className="moto-widget-callback__more-details">
						<div className="moto-widget-callback__more-details-item">
							<div className="moto-widget-callback__overlay moto-widget-callback__overlay_link"></div>
							<a href="https://t.me/#" className="moto-widget-callback__link moto-widget-callback__link-telegram_chat" title="Telegram" target="_blank"></a>
						</div>
						<div className="moto-widget-callback__more-details-item">
							<div className="moto-widget-callback__overlay moto-widget-callback__overlay_link"></div>
							<a href="https://wa.me/#" className="moto-widget-callback__link moto-widget-callback__link-whatsapp_chat" title="WhatsApp" target="_blank"></a>
						</div>
						<div className="moto-widget-callback__more-details-item">
							<div className="moto-widget-callback__overlay moto-widget-callback__overlay_link"></div>
							<a href="https://m.me/#" className="moto-widget-callback__link moto-widget-callback__link-fb_messenger_chat" title="Facebook Messenger" target="_blank"></a>
						</div>
						<div className="moto-widget-callback__more-details-item">
							<div className="moto-widget-callback__overlay moto-widget-callback__overlay_link"></div>
							<a href="skype:#?chat" className="moto-widget-callback__link moto-widget-callback__link-skype_chat" title="Skype (Chat)" target="_blank"></a>
						</div>
					</div>
				</div>
				<div className="moto-widget-callback__more-details-button-wrapper"><i className="moto-widget-callback__more-details-button fa fa-angle-down"></i></div>
				<div className="moto-widget-callback__close-button fa fa-times"></div>
			</div>
		</div>
	</div>
    </div>
    )

  }
  