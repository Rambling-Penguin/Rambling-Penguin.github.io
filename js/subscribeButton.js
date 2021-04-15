
export default class SubscribeButton extends HTMLElement {
    constructor(props) {
        super(props);
    }

    connectedCallback() {
        this.innerHTML =`

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#subscribeModal">
              Subscribe
            </button>

            <!-- Modal -->
            <div class="modal fade" id="subscribeModal" tabindex="-1" role="dialog" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="subscribeModalLabel">Subscribe</h5>
                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- Begin Mailchimp Signup Form -->
                                <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                                <style type="text/css">
                                    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
                                    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                                    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                                </style>
                                <div id="mc_embed_signup">
                                    <form action="https://ramblingpenguin.us1.list-manage.com/subscribe/post?u=5e4c26fc70e4ec138aaa0a9aa&amp;id=c505fdb0fb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                        <div id="mc_embed_signup_scroll">
                                            <div class="mc-field-group">
                                                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                                                </label>
                                                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                                            </div>
                                            <div class="mc-field-group">
                                                <label for="mce-FNAME">First Name </label>
                                                <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                                            </div>
                                            <div class="mc-field-group">
                                                <label for="mce-LNAME">Last Name </label>
                                                <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                                            </div>
                                           	<div id="mce-responses" class="clear">
                                                <div class="response" id="mce-error-response" style="display:none"></div>
                                                <div class="response" id="mce-success-response" style="display:none"></div>
                                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5e4c26fc70e4ec138aaa0a9aa_c505fdb0fb" tabindex="-1" value=""></div>
                                            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                                        </div>
                                    </form>
                                </div>
    
                            <!--End mc_embed_signup-->
                        </div>
                    </div>
                </div>
            </div>`;

        this.querySelector('form[name="mc-embedded-subscribe-form"]').addEventListener('submit', () => {
            ga('send', 'event', 'Subscriber', 'subscribed');
        });
    }

}

window.customElements.define('subscribe-button', SubscribeButton);