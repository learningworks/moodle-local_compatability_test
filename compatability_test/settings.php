<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Moodle Plugin
 *
 * Settings
 *
 * @package    local
 * @subpackage compatability_test
 * @copyright  2014 Chris Clark, LearningWorks Ltd
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

if ($hassiteconfig) {
    global $CFG, $USER, $DB;

    $moderator = get_admin();
    $site = get_site();

    $settings = new admin_settingpage('local_compatability_test', get_string('pluginname', 'local_compatability_test'));
    $ADMIN->add('localplugins', $settings);

    /*$title = get_string('enable_browser_check', 'local_compatability_test');
    $desc =  get_string('enable_browser_check_desc', 'local_compatability_test');
    $setting = new admin_setting_configcheckbox('local_compatability_test/enable_browser_check', $title, $desc, 0);
    $settings->add($setting);*/

    $title = get_string('enable_java_check', 'local_compatability_test');
    $desc = get_string('enable_java_check_desc', 'local_compatability_test');
    $setting = new admin_setting_configcheckbox('local_compatability_test/enable_java_check', $title, $desc, 0);
    $settings->add($setting);

    $title = get_string('min_version_java', 'local_compatability_test');
    $desc = get_string('min_version_java_desc', 'local_compatability_test');
    $setting = new admin_setting_configtext('local_compatability_test/min_version_java', $title, $desc, '');
    $settings->add($setting);

    $title = get_string('enable_flash_check', 'local_compatability_test');
    $desc = get_string('enable_flash_check_desc', 'local_compatability_test');
    $setting = new admin_setting_configcheckbox('local_compatability_test/enable_flash_check', $title, $desc, 0);
    $settings->add($setting);

    $title = get_string('min_version_flash', 'local_compatability_test');
    $desc = get_string('min_version_flash_desc', 'local_compatability_test');
    $setting = new admin_setting_configtext('local_compatability_test/min_version_flash', $title, $desc, '');
    $settings->add($setting);

    $title = get_string('force_view_page', 'local_compatability_test');
    $desc = get_string('force_view_page_desc', 'local_compatability_test');
    $setting = new admin_setting_configcheckbox('local_compatability_test/force_view_page', $title, $desc, 0);
    $settings->add($setting);
}
