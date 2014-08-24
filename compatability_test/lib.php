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

global $COURSE, $USER, $DB, $CFG, $PAGE;


$CFG->additionalhtmlhead .= '
	<script src="'.$CFG->wwwroot .'/local/compatability_test/js/PluginDetect_Java_Flash.js"></script>
	<script src="'.$CFG->wwwroot .'/local/compatability_test/js/scripts.js"></script>
	<script>var uptodateFlag = true;</script>
	';


function local_compatability_test_build_view() {
    $tablebody = '';
    if (local_compatability_test_enable_java_check()) {
        $minjavaversion = local_compatability_test_min_version_java();
        $tablebody .= '
			<tr><td>Java</td><td id="users-java">TODO</td>
		';
        $tablebody .= '
            <td>'.$minjavaversion.'</td><td><a href="http://java.com/download">Visit Website</a></td></tr>
        ';
    }
    if (local_compatability_test_enable_flash_check()) {
        $minflashversion = local_compatability_test_min_version_flash();
        $tablebody .= '
			<tr><td>Flash</td><td id="users-flash">TODO</td>
		';
        $tablebody .= '
            <td>'.$minflashversion.'</td><td><a href="http://get.adobe.com/flashplayer/">Visit Website</a></td></tr>
        ';
    }
    echo $tablebody;
}

function local_compatability_test_enable_browser_check() {
    $enabled = get_config('local_compatability_test', 'enable_browser_check');
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
function local_compatability_test_force_view_page() {
    $enabled = get_config('local_compatability_test', 'force_view_page');
    if (empty($enabled)) {
        return false;
    } else {
        return true;
    }
}
/*if (local_compatability_test_enable_browser_check()) {
}*/
if (local_compatability_test_enable_java_check()) {
    $minjava = local_compatability_test_min_version_java();
    $CFG->additionalhtmlhead .= '
		<script>
            checkJava('.$minjava.');
		</script>
	';
}
if (local_compatability_test_enable_flash_check()) {
    $minflash = local_compatability_test_min_version_flash();
    $CFG->additionalhtmlhead .= '
		<script>
            checkFlash('.$minflash.');
		</script>
	';
}
if (local_compatability_test_force_view_page()) {
    if (! is_siteadmin()) {
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
		updateUserView();
	</script>
	<script>
		checkDisplayBanner(uptodateFlag, \''. $bannerfailure .'\', \''. $link .'\', \''. $bannerlink .'\');
	</script>
';
