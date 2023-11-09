import './generalSettings.css';

// import Image from 'next/image';

export default function GeneralSettings() {

    return(
        <div className="generalSettings_container">
            <h3>General settings</h3>
            <div className="generalSettings_section">
                <div>
                    <input type="checkbox" id="add" name="add" checked />
                    <label for="add">Add version nr. to file with import</label>
                </div>

                <div>
                    <input type="checkbox" id="remember" name="remember" checked />
                    <label for="remember">Remember log in function</label>
                </div>

                <div>
                    <input type="checkbox" id="auth" name="auth" />
                    <label for="auth">2FA</label>
                </div>
            </div>

            <h3>Outgoing mail server</h3>
            <div className="generalSettings_section">
                <div>
                    <input type="radio" id="smtp" name="smtp" value="smtp" checked />
                    <label for="smtp">SMTP</label>
                </div>
                <div>
                    <input type="radio" id="graph" name="graph" value="graph" />
                    <label for="graph">Graph API</label>
                </div>
            </div>
            <div className="generalSettings_section">
                <form action="" method="get" className="generalSettings_form">
                    <div className="form_row">
                        <div className="form_section">
                            <label for="smtp-address">SMTP address </label>
                            <input type="text" name="smtp-address" id="smtp-address" required />
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="form_section">
                            <label for="smtp-email">Mail address sender</label>
                            <input type="email" name="smtp-email" id="smtp-email" required />
                        </div>
                    </div>

                    <div className="form_row">
                        <div className="form_section">
                            <label for="smtp-name">Sending name</label>
                            <input type="text" name="smtp-name" id="smtp-name" required />
                        </div>

                        <div className="form_section">
                            <label for="smpt-log-in">SMPT log in</label>
                            <input type="text" name="smpt-log-in" id="smpt-log-in" required />
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="form_section">
                            <label for="smpt-password">SMPT password</label>
                            <input type="password" name="smpt-password" id="smpt-password" required />
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="form_section">
                            <label for="smpt-gate">SMPT gate</label>
                            <input type="text" name="smpt-gate" id="smpt-gate" required />
                        </div>

                        <div className="form_section">
                            <label for="smtp-encryption">Encryption</label>
                            <input type="text" name="smtp-encryption" id="smtp-encryption" required />
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="form_section">
                            <label for="smtp-send-test">Send test to</label>
                            <input type="text" name="smtp-send-test" id="smtp-send-test" required />
                        </div>
                    </div>
                    <button type="submit" className="generalSettings_form_button_submit">Send</button>
                </form>
            </div>
        </div>
    )
}