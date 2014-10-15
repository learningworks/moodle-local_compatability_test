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
 * lib
 *
 * @package    local
 * @subpackage compatability_test
 * @copyright  2014 Chris Clark, LearningWorks Ltd
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

    
function local_compatability_test_check_enabled() {
    $enabled = array("browser" => false, "chrome" => array(false, local_compatability_test_min_version_chrome()),"gecko" => array(false, local_compatability_test_min_version_gecko()),"opera" => array(false, local_compatability_test_min_version_opera()),"safari" => array(false, local_compatability_test_min_version_safari()), "flash" => array(false, local_compatability_test_min_version_flash()), "java" => array(false, local_compatability_test_min_version_java()));

    // Flash
    if (local_compatability_test_enable_flash_check())
        $enabled["flash"][0] = true;

    if (local_compatability_test_enable_java_check()) {
        $enabled["java"][0] = true;
    }

    if (local_compatability_test_enable_browser_check()) {
        $enabled["browser"] = true;

        if (local_compatability_test_enable_chrome_check())
            $enabled["chrome"][0] = true;

        if (local_compatability_test_enable_gecko_check())
            $enabled["gecko"][0] = true;

        if (local_compatability_test_enable_opera_check())
            $enabled["opera"][0] = true;

        if (local_compatability_test_enable_safari_check())
            $enabled["safari"][0] = true;
    }

    return json_encode($enabled);
}

function local_compatability_test_enable_browser_check() {
    $enabled = get_config('local_compatability_test', 'enable_browser_check');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
function local_compatability_test_enable_chrome_check() {
    $enabled = get_config('local_compatability_test', 'enable_chrome_check');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
function local_compatability_test_min_version_chrome() {
    $enabled = get_config('local_compatability_test', 'min_version_chrome');
    if (empty($enabled)) {
        return false;
    } else {
        return $enabled;
    }
}
function local_compatability_test_enable_gecko_check() {
    $enabled = get_config('local_compatability_test', 'enable_gecko_check');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
function local_compatability_test_enable_opera_check() {
    $enabled = get_config('local_compatability_test', 'enable_opera_check');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
function local_compatability_test_enable_safari_check() {
    $enabled = get_config('local_compatability_test', 'enable_safari_check');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
function local_compatability_test_enable_java_check() {
    $enabled = get_config('local_compatability_test', 'enable_java_check');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
function local_compatability_test_min_version_java() {
    $enabled = get_config('local_compatability_test', 'min_version_java');
    if (empty($enabled)) {
        /*if ($enabled == "") {
        $latestJava = file_get_contents('http://java.com/applet/JreCurrentVersion2.txt');
        $latestJava = trim(str_replace("_" , ".", $latestJava));
        return $latestJava;*/
        return false;
    } else {
        return $enabled;
    }
}
function local_compatability_test_enable_flash_check() {
    $enabled = get_config('local_compatability_test', 'enable_flash_check');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
function local_compatability_test_min_version_flash() {
    $enabled = get_config('local_compatability_test', 'min_version_flash');
    if (empty($enabled)) {
        return false;
    } else {
        return $enabled;
    }
}
function local_compatability_test_min_version_gecko() {
    $enabled = get_config('local_compatability_test', 'min_version_gecko');
    if (empty($enabled)) {
        return false;
    } else {
        return $enabled;
    }
}
function local_compatability_test_min_version_opera() {
    $enabled = get_config('local_compatability_test', 'min_version_opera');
    if (empty($enabled)) {
        return false;
    } else {
        return $enabled;
    }
}
function local_compatability_test_min_version_safari() {
    $enabled = get_config('local_compatability_test', 'min_version_safari');
    if (empty($enabled)) {
        return false;
    } else {
        return $enabled;
    }
}
function local_compatability_test_force_view_page() {
    $enabled = get_config('local_compatability_test', 'force_view_page');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}

global $COURSE, $USER, $DB, $CFG, $PAGE;

$enabled = local_compatability_test_check_enabled();

$CFG->additionalhtmlhead .= '
<script src="'.$CFG->wwwroot .'/local/compatability_test/js/PluginDetect_Java_Flash.js"></script>
<script src="'.$CFG->wwwroot .'/local/compatability_test/js/scripts.js"></script>
<script>isUpToDate('.$enabled.');</script>';

if (local_compatability_test_force_view_page()) {
    if (!is_siteadmin()) {
        $CFG->additionalhtmlhead .= '
        <script>
            forceStatusPage(\''. $CFG->wwwroot .'/local/compatability_test/view.php' .'\');
        </script>
        ';
    }
}

$bannerfailure = get_string('banner_failure', 'local_compatability_test');
$bannerlink = get_string('banner_link', 'local_compatability_test');
$link = $CFG->wwwroot . '/local/compatability_test/view.php';

$CFG->additionalhtmlfooter .= '
<script>
    updateUserView(' . $enabled . ');
    checkDisplayBanner( \''. $bannerfailure .'\', \''. $link .'\', \''. $bannerlink .'\');
</script>
';