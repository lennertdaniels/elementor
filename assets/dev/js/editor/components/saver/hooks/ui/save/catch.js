import HookUICatch from 'elementor-api/modules/hooks/ui/catch';

export class FooterSaverCatchSave extends HookUICatch {
	getCommand() {
		return 'document/save/save';
	}

	getId() {
		return 'footer-saver-catch-save';
	}

	apply( args, e ) {
		NProgress.done();

		elementor.footerSaver.buttonPublish.removeClass( 'elementor-button-state' );
	}
}

export default FooterSaverCatchSave;
