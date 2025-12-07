import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return <>
 <>
            <footer className={`${style.footerBg} text-white text-center pt-5 pb-4`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">LOCATION</h4>
                            <p className="lead mb-0">
                                2215 John Daniel Drive
                                <br />
                                Clark, MO 65243
                            </p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">AROUND THE WEB</h4>
                            <div className="d-flex justify-content-center">
                                <a className={`${style.socialIcon} btn btn-outline-light mx-1`} href="#!">
                                    <i className="fab fa-fw fa-facebook-f"></i>
                                </a>
                                <a className={`${style.socialIcon} btn btn-outline-light mx-1`} href="#!">
                                    <i className="fab fa-fw fa-twitter"></i>
                                </a>
                                <a className={`${style.socialIcon} btn btn-outline-light mx-1`} href="#!">
                                    <i className="fab fa-fw fa-linkedin-in"></i>
                                </a>
                                <a className={`${style.socialIcon} btn btn-outline-light mx-1`} href="#!">
                                    <i className="fas fa-fw fa-globe"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">ABOUT FREELANCER</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, licensed <br/> Bootstrap theme created by Route
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={`${style.copyright} text-center py-4`}>
                <div className="container">
                    <small>Copyright ©<a href="https://github.com/abanob2005" target='blank_'> Abanob Sameh Hanna</a> 2025</small>
                </div>
            </div>
        </>
  </>
}
