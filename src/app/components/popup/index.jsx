import React, { Component } from 'react';
import PropTypes from 'prop-types';

// constants
import * as constants from 'src/constants';

import SettingsContent from 'src/app/containers/settings/settings-content';
import InfoContent from 'src/app/components/info/info-content';

// style
import style from './style.scss';

export default class Popup extends Component {
  closePopup = () => {
    const { setPopupSettingsCloseClear } = this.props;
    setPopupSettingsCloseClear();
  }

  checkKeyPress = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      callback();
    }
  }

  renderContent = () => {
    const { content } = this.props.popup;
    switch (content) {
      case constants.POPUP_SETTINGS:
        return <SettingsContent />;
      case constants.POPUP_INFO:
        return <InfoContent />;
      default:
        return <SettingsContent />;
    }
  }

  render() {
    const { popup } = this.props;
    if (popup.openState) {
      return (
        <div
          className={style.wrapper}
        >
          <div className={style.popupContent}>
            <div className={style.popupContentInner}>
              { this.renderContent() }
              <button
                className={style.closeButton}
                onClick={this.closePopup}
                onKeyPress={(e) => {
                  this.checkKeyPress(e, this.closePopup);
                }}
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

Popup.propTypes = {
  popup: PropTypes.shape({
    openState: PropTypes.bool,
    content: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.string,
    ]),
  }),
};

Popup.defaultProps = {
  popup: {
    openState: false,
    content: 'popup_settings',
  },
};
